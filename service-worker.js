const CACHE_NAME = "simulador-urna-2026-v2";

const BASE_URL = self.registration.scope;

const caminho = (arquivo) =>
  new URL(arquivo, BASE_URL).href;


/* =========================================================
   ARQUIVOS PRINCIPAIS
========================================================= */

const ARQUIVOS_PRINCIPAIS = [
  BASE_URL,
  caminho("index.html"),
  caminho("style.css"),
  caminho("app.js")
];


/* =========================================================
   SALVA ARQUIVO NO CACHE
========================================================= */

async function salvarArquivo(cache, arquivo) {

  try {

    const resposta = await fetch(
      arquivo,
      {
        cache: "no-store"
      }
    );

    if (resposta.ok) {

      await cache.put(
        arquivo,
        resposta.clone()
      );

    }

  } catch (erro) {

    console.log(
      "Não foi possível armazenar:",
      arquivo
    );

  }

}


/* =========================================================
   LOCALIZA FOTOS, SONS E OUTROS ASSETS
========================================================= */

async function descobrirAssets() {

  const arquivos = new Set();

  const fontes = [
    caminho("index.html"),
    caminho("style.css"),
    caminho("app.js")
  ];

  for (const fonte of fontes) {

    try {

      const resposta = await fetch(
        fonte,
        {
          cache: "no-store"
        }
      );

      if (!resposta.ok) {
        continue;
      }

      const texto = await resposta.text();

      const regex =
        /(?:\.\/)?assets\/[^"'`()\s]+?\.(?:png|jpg|jpeg|webp|gif|svg|mp3|wav|ogg)/gi;

      const encontrados =
        texto.match(regex) || [];

      encontrados.forEach((arquivo) => {

        arquivo =
          arquivo.replace(
            /^\.\//,
            ""
          );

        arquivos.add(
          caminho(arquivo)
        );

      });

    } catch (erro) {

      console.log(
        "Não foi possível verificar:",
        fonte
      );

    }

  }

  return [...arquivos];

}


/* =========================================================
   INSTALAÇÃO
========================================================= */

self.addEventListener(
  "install",
  (evento) => {

    evento.waitUntil(

      (async () => {

        const cache =
          await caches.open(
            CACHE_NAME
          );

        for (
          const arquivo
          of ARQUIVOS_PRINCIPAIS
        ) {

          await salvarArquivo(
            cache,
            arquivo
          );

        }

        const assets =
          await descobrirAssets();

        await Promise.allSettled(

          assets.map(
            (arquivo) =>
              salvarArquivo(
                cache,
                arquivo
              )
          )

        );

        self.skipWaiting();

      })()

    );

  }
);


/* =========================================================
   ATIVAÇÃO
========================================================= */

self.addEventListener(
  "activate",
  (evento) => {

    evento.waitUntil(

      (async () => {

        const nomes =
          await caches.keys();

        await Promise.all(

          nomes.map(
            (nome) => {

              if (
                nome !== CACHE_NAME
              ) {

                return caches.delete(
                  nome
                );

              }

            }
          )

        );

        await self.clients.claim();

      })()

    );

  }
);


/* =========================================================
   FUNCIONAMENTO OFFLINE
========================================================= */

self.addEventListener(
  "fetch",
  (evento) => {

    if (
      evento.request.method !== "GET"
    ) {
      return;
    }


    /* =====================================================
       ATUALIZAÇÃO / REABERTURA DA PÁGINA
    ===================================================== */

    if (
      evento.request.mode === "navigate"
    ) {

      evento.respondWith(

        (async () => {

          const cache =
            await caches.open(
              CACHE_NAME
            );

          try {

            /*
              Com internet:
              tenta buscar a versão atual.
            */

            const resposta =
              await fetch(
                evento.request
              );

            if (
              resposta &&
              resposta.ok
            ) {

              await cache.put(
                caminho("index.html"),
                resposta.clone()
              );

            }

            return resposta;

          } catch (erro) {

            /*
              SEM INTERNET:
              abre obrigatoriamente o index.html
              salvo no aparelho.
            */

            const pagina =
              await cache.match(
                caminho("index.html")
              );

            if (pagina) {
              return pagina;
            }


            const inicio =
              await cache.match(
                BASE_URL
              );

            if (inicio) {
              return inicio;
            }


            return new Response(
              "Simulador temporariamente indisponível.",
              {
                status: 503,
                headers: {
                  "Content-Type":
                    "text/plain; charset=utf-8"
                }
              }
            );

          }

        })()

      );

      return;

    }


    /* =====================================================
       FOTOS, SONS, CSS, JS ETC.
    ===================================================== */

    evento.respondWith(

      (async () => {

        const cache =
          await caches.open(
            CACHE_NAME
          );

        const armazenado =
          await cache.match(
            evento.request,
            {
              ignoreSearch: true
            }
          );

        if (armazenado) {
          return armazenado;
        }


        try {

          const resposta =
            await fetch(
              evento.request
            );

          if (
            resposta &&
            resposta.ok &&
            evento.request.url.startsWith(
              self.location.origin
            )
          ) {

            await cache.put(
              evento.request,
              resposta.clone()
            );

          }

          return resposta;

        } catch (erro) {

          return new Response(
            "",
            {
              status: 503
            }
          );

        }

      })()

    );

  }
);