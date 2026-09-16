const CACHE_NAME = "simulador-urna-2026-v1";

const ARQUIVOS_PRINCIPAIS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js"
];


/* =========================================================
   DESCOBRE AUTOMATICAMENTE FOTOS, SONS E OUTROS ARQUIVOS
   CITADOS NO HTML, CSS E JAVASCRIPT
========================================================= */

async function descobrirAssets() {

  const arquivos = new Set();

  const fontes = [
    "./index.html",
    "./style.css",
    "./app.js"
  ];

  for (const fonte of fontes) {

    try {

      const resposta = await fetch(fonte, {
        cache: "no-store"
      });

      if (!resposta.ok) {
        continue;
      }

      const texto = await resposta.text();

      const regex =
        /(?:\.\/)?assets\/[^"'`()\s]+?\.(?:png|jpg|jpeg|webp|gif|svg|mp3|wav|ogg)/gi;

      const encontrados =
        texto.match(regex) || [];

      encontrados.forEach((arquivo) => {

        let caminho = arquivo;

        if (!caminho.startsWith("./")) {
          caminho = "./" + caminho;
        }

        arquivos.add(caminho);

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
   SALVA UM ARQUIVO SEM INTERROMPER A INSTALAÇÃO
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
      "Arquivo não armazenado:",
      arquivo
    );

  }

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

        /* Arquivos principais */

        for (
          const arquivo
          of ARQUIVOS_PRINCIPAIS
        ) {

          await salvarArquivo(
            cache,
            arquivo
          );

        }


        /*
          Procura automaticamente as fotos dos candidatos,
          sons e demais arquivos existentes dentro de assets.
        */

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

        const cachesExistentes =
          await caches.keys();

        await Promise.all(

          cachesExistentes.map(
            (cache) => {

              if (
                cache !== CACHE_NAME
              ) {

                return caches.delete(
                  cache
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

    evento.respondWith(

      (async () => {

        const cache =
          await caches.open(
            CACHE_NAME
          );

        const armazenado =
          await cache.match(
            evento.request
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

            cache.put(
              evento.request,
              resposta.clone()
            );

          }

          return resposta;

        } catch (erro) {

          /*
            Se estiver totalmente offline e for
            uma navegação, abre a página principal.
          */

          if (
            evento.request.mode ===
            "navigate"
          ) {

            return (
              await cache.match(
                "./index.html"
              )
            );

          }

          throw erro;

        }

      })()

    );

  }
);