/* =========================================================
   SIMULADOR DE TREINAMENTO - ELEIÇÕES 2026
   LÓGICA PRINCIPAL
========================================================= */


/* =========================================================
   ETAPAS DA VOTAÇÃO
========================================================= */

const etapas = [
  {
    cargo: "DEPUTADO FEDERAL",
    digitos: 4
  },
  {
    cargo: "DEPUTADO ESTADUAL",
    digitos: 5
  },
  {
    cargo: "SENADOR - 1ª VAGA",
    digitos: 3
  },
  {
    cargo: "SENADOR - 2ª VAGA",
    digitos: 3
  },
  {
    cargo: "GOVERNADOR",
    digitos: 2
  },
  {
    cargo: "PRESIDENTE",
    digitos: 2
  }
];


/* =========================================================
   BASE DE CANDIDATOS

   POR ENQUANTO FICA VAZIA.
   NA PRÓXIMA ETAPA VAMOS INSERIR OS DADOS OFICIAIS.
========================================================= */

const candidatos = {
  "DEPUTADO FEDERAL|1000": {
    nome: "EVALDO COSTA",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545105_div.jpg"
  },
  "DEPUTADO FEDERAL|1001": {
    nome: "MICHEL LINS",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545098_div.jpg"
  },
  "DEPUTADO FEDERAL|1010": {
    nome: "RONALDO MARTINS",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545106_div.jpg"
  },
  "DEPUTADO FEDERAL|1011": {
    nome: "ENFERMEIRA CERIS",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545102_div.jpg"
  },
  "DEPUTADO FEDERAL|1013": {
    nome: "MAIARA CUNHA",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545103_div.jpg"
  },
  "DEPUTADO FEDERAL|1015": {
    nome: "ROZÁRIO XIMENES",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545104_div.jpg"
  },
  "DEPUTADO FEDERAL|1016": {
    nome: "PR RODRIGO MATOS",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545099_div.jpg"
  },
  "DEPUTADO FEDERAL|1020": {
    nome: "MAURICIO SANFORD",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545101_div.jpg"
  },
  "DEPUTADO FEDERAL|1022": {
    nome: "APÓSTOLO CARLOS BRUNILDO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545095_div.jpg"
  },
  "DEPUTADO FEDERAL|1026": {
    nome: "ÉRIKA JANE",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545094_div.jpg"
  },
  "DEPUTADO FEDERAL|1033": {
    nome: "XISTO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545097_div.jpg"
  },
  "DEPUTADO FEDERAL|1045": {
    nome: "BENIGNO JUNIOR",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545100_div.jpg"
  },
  "DEPUTADO FEDERAL|1055": {
    nome: "ERIKA AMORIM",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002544112_div.jpg"
  },
  "DEPUTADO FEDERAL|1088": {
    nome: "THIAGO CIRIACO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545096_div.jpg"
  },
  "DEPUTADO FEDERAL|1099": {
    nome: "IRENE DANTAS",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545093_div.jpg"
  },
  "DEPUTADO FEDERAL|1111": {
    nome: "AJ ALBUQUERQUE",
    partido: "PP",
    foto: "assets/candidatos/FCE60002534881_div.jpg"
  },
  "DEPUTADO FEDERAL|1122": {
    nome: "FÁBIA BRILHANTE",
    partido: "PP",
    foto: "assets/candidatos/FCE60002534886_div.jpg"
  },
  "DEPUTADO FEDERAL|1144": {
    nome: "DANILO FORTE",
    partido: "PP",
    foto: "assets/candidatos/FCE60002534888_div.jpg"
  },
  "DEPUTADO FEDERAL|1200": {
    nome: "RAIMUNDO FILHO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536602_div.jpg"
  },
  "DEPUTADO FEDERAL|1202": {
    nome: "VALDECI BARROS DOS FRETES",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536050_div.jpg"
  },
  "DEPUTADO FEDERAL|1207": {
    nome: "ELIANE CRUZ",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536595_div.jpg"
  },
  "DEPUTADO FEDERAL|1210": {
    nome: "REBECA MOTA",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536603_div.jpg"
  },
  "DEPUTADO FEDERAL|1211": {
    nome: "EDNILZA KOKAMA",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536596_div.jpg"
  },
  "DEPUTADO FEDERAL|1212": {
    nome: "KATIA RODRIGUES",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536048_div.jpg"
  },
  "DEPUTADO FEDERAL|1213": {
    nome: "JOÃO ARTHUR",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536606_div.jpg"
  },
  "DEPUTADO FEDERAL|1217": {
    nome: "MARIA HELENICE",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536607_div.jpg"
  },
  "DEPUTADO FEDERAL|1222": {
    nome: "MAMÁ MESQUITA",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536051_div.jpg"
  },
  "DEPUTADO FEDERAL|1224": {
    nome: "FRANCO BOTELHO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002554365_div.jpg"
  },
  "DEPUTADO FEDERAL|1233": {
    nome: "JOÃO CARTEIRO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536597_div.jpg"
  },
  "DEPUTADO FEDERAL|1234": {
    nome: "ANDRÉ FIGUEIREDO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536601_div.jpg"
  },
  "DEPUTADO FEDERAL|1244": {
    nome: "RICARDO SOUSA",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536047_div.jpg"
  },
  "DEPUTADO FEDERAL|1245": {
    nome: "RICARDO JORGE VIEIRA",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536594_div.jpg"
  },
  "DEPUTADO FEDERAL|1255": {
    nome: "DENIS TORQUATO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536605_div.jpg"
  },
  "DEPUTADO FEDERAL|1256": {
    nome: "ANA SOARES",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536600_div.jpg"
  },
  "DEPUTADO FEDERAL|1267": {
    nome: "HELOISA FLORENCIO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536608_div.jpg"
  },
  "DEPUTADO FEDERAL|1277": {
    nome: "ADAIL JR.",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536598_div.jpg"
  },
  "DEPUTADO FEDERAL|1284": {
    nome: "LARISSA FREITAS",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536049_div.jpg"
  },
  "DEPUTADO FEDERAL|1288": {
    nome: "VANESSA FERREIRA",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536052_div.jpg"
  },
  "DEPUTADO FEDERAL|1290": {
    nome: "SUBTENENTE PAULO BERNARDO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536053_div.jpg"
  },
  "DEPUTADO FEDERAL|1291": {
    nome: "IRMÃO AGAMENON",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536599_div.jpg"
  },
  "DEPUTADO FEDERAL|1299": {
    nome: "FERREIRA ARAGÃO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536604_div.jpg"
  },
  "DEPUTADO FEDERAL|1300": {
    nome: "AUDIC MOTA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540741_div.jpg"
  },
  "DEPUTADO FEDERAL|1301": {
    nome: "LUISA CELA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540740_div.jpg"
  },
  "DEPUTADO FEDERAL|1311": {
    nome: "MADALENA QUILOMBOLA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540734_div.jpg"
  },
  "DEPUTADO FEDERAL|1312": {
    nome: "TOINHO CONTÁBIL",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540749_div.jpg"
  },
  "DEPUTADO FEDERAL|1313": {
    nome: "ADELITA MONTEIRO",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540743_div.jpg"
  },
  "DEPUTADO FEDERAL|1314": {
    nome: "WEIBE TAPEBA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540737_div.jpg"
  },
  "DEPUTADO FEDERAL|1315": {
    nome: "AURI JUNIOR",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540735_div.jpg"
  },
  "DEPUTADO FEDERAL|1322": {
    nome: "FERNANDO SANTANA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540744_div.jpg"
  },
  "DEPUTADO FEDERAL|1323": {
    nome: "RAIMUNDO MARTINS",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540746_div.jpg"
  },
  "DEPUTADO FEDERAL|1331": {
    nome: "LARISSA GASPAR",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540750_div.jpg"
  },
  "DEPUTADO FEDERAL|1333": {
    nome: "JOSÉ AIRTON",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540742_div.jpg"
  },
  "DEPUTADO FEDERAL|1365": {
    nome: "PAULO ASSUNÇÃO",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540748_div.jpg"
  },
  "DEPUTADO FEDERAL|1370": {
    nome: "ADRIANA PEDROSA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540736_div.jpg"
  },
  "DEPUTADO FEDERAL|1377": {
    nome: "VANDERLEY NOGUEIRA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540747_div.jpg"
  },
  "DEPUTADO FEDERAL|1388": {
    nome: "BOM BIBI",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540751_div.jpg"
  },
  "DEPUTADO FEDERAL|1399": {
    nome: "PROFESSOR ANÍZIO",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540739_div.jpg"
  },
  "DEPUTADO FEDERAL|1400": {
    nome: "SOPHIA FECHINE",
    partido: "MISSÃO",
    foto: "assets/candidatos/FCE60002540414_div.jpg"
  },
  "DEPUTADO FEDERAL|1401": {
    nome: "SAMUEL GRANDI",
    partido: "MISSÃO",
    foto: "assets/candidatos/FCE60002540413_div.jpg"
  },
  "DEPUTADO FEDERAL|1414": {
    nome: "GABRIEL CARVALHO",
    partido: "MISSÃO",
    foto: "assets/candidatos/FCE60002540411_div.jpg"
  },
  "DEPUTADO FEDERAL|1428": {
    nome: "LUCAS OLIVEIRA",
    partido: "MISSÃO",
    foto: "assets/candidatos/FCE60002540412_div.jpg"
  },
  "DEPUTADO FEDERAL|1433": {
    nome: "CLICIA GADELHA",
    partido: "MISSÃO",
    foto: "assets/candidatos/FCE60002540408_div.jpg"
  },
  "DEPUTADO FEDERAL|1441": {
    nome: "RUAN DUTRA",
    partido: "MISSÃO",
    foto: "assets/candidatos/FCE60002540407_div.jpg"
  },
  "DEPUTADO FEDERAL|1442": {
    nome: "IGOR PEIXOTO",
    partido: "MISSÃO",
    foto: "assets/candidatos/FCE60002540406_div.jpg"
  },
  "DEPUTADO FEDERAL|1444": {
    nome: "UELITON BRILHOSO",
    partido: "MISSÃO",
    foto: "assets/candidatos/FCE60002540410_div.jpg"
  },
  "DEPUTADO FEDERAL|1467": {
    nome: "ERICA FREIRE",
    partido: "MISSÃO",
    foto: "assets/candidatos/FCE60002540409_div.jpg"
  },
  "DEPUTADO FEDERAL|1500": {
    nome: "BISPA VANESSA LIMA",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542435_div.jpg"
  },
  "DEPUTADO FEDERAL|1501": {
    nome: "PASTOR MARCIO",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542210_div.jpg"
  },
  "DEPUTADO FEDERAL|1502": {
    nome: "PASTOR LAURO",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542446_div.jpg"
  },
  "DEPUTADO FEDERAL|1509": {
    nome: "PROFESSOR LOURENÇO",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542208_div.jpg"
  },
  "DEPUTADO FEDERAL|1510": {
    nome: "LOBÃO",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542441_div.jpg"
  },
  "DEPUTADO FEDERAL|1511": {
    nome: "RENATO MORAES",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542437_div.jpg"
  },
  "DEPUTADO FEDERAL|1512": {
    nome: "MARLUS RODRIGUES",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542433_div.jpg"
  },
  "DEPUTADO FEDERAL|1515": {
    nome: "YURY DO PAREDÃO",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542442_div.jpg"
  },
  "DEPUTADO FEDERAL|1516": {
    nome: "ANGELA PINHEIRO",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542448_div.jpg"
  },
  "DEPUTADO FEDERAL|1520": {
    nome: "JACQUELINE GOUVEIA",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542444_div.jpg"
  },
  "DEPUTADO FEDERAL|1522": {
    nome: "ALMIR GUILHERME",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542436_div.jpg"
  },
  "DEPUTADO FEDERAL|1525": {
    nome: "PASTOR IREMAR",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542209_div.jpg"
  },
  "DEPUTADO FEDERAL|1531": {
    nome: "ERON NARCISO",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542439_div.jpg"
  },
  "DEPUTADO FEDERAL|1533": {
    nome: "GORETE PEREIRA",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542443_div.jpg"
  },
  "DEPUTADO FEDERAL|1541": {
    nome: "JOSÉ SALES",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542212_div.jpg"
  },
  "DEPUTADO FEDERAL|1544": {
    nome: "JESSICA MACAXEIRA",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002554044_div.jpg"
  },
  "DEPUTADO FEDERAL|1555": {
    nome: "NENEN COELHO",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542447_div.jpg"
  },
  "DEPUTADO FEDERAL|1567": {
    nome: "DR PEDRO PAULO",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542449_div.jpg"
  },
  "DEPUTADO FEDERAL|1577": {
    nome: "SOCORRO LIMA",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542434_div.jpg"
  },
  "DEPUTADO FEDERAL|1578": {
    nome: "CLAUDIO MENEZES",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542211_div.jpg"
  },
  "DEPUTADO FEDERAL|1592": {
    nome: "ENFERMEIRA LILI",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542438_div.jpg"
  },
  "DEPUTADO FEDERAL|1599": {
    nome: "CHRISTIANNE",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542445_div.jpg"
  },
  "DEPUTADO FEDERAL|1800": {
    nome: "MITCHELLE MEIRA",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538327_div.jpg"
  },
  "DEPUTADO FEDERAL|1812": {
    nome: "CARLOS ZANDRO",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538335_div.jpg"
  },
  "DEPUTADO FEDERAL|1818": {
    nome: "TOINHA ROCHA",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538326_div.jpg"
  },
  "DEPUTADO FEDERAL|1881": {
    nome: "PROFESSORA MARGARIDA ALVES",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538338_div.jpg"
  },
  "DEPUTADO FEDERAL|1883": {
    nome: "THIAGO VEGANO",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538331_div.jpg"
  },
  "DEPUTADO FEDERAL|1888": {
    nome: "LEO AZEVEDO",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538322_div.jpg"
  },
  "DEPUTADO FEDERAL|1899": {
    nome: "HELIO FERNANDES",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538319_div.jpg"
  },
  "DEPUTADO FEDERAL|2000": {
    nome: "NELINHO",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551892_div.jpg"
  },
  "DEPUTADO FEDERAL|2002": {
    nome: "LAUDENILSON BOTELHO",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551895_div.jpg"
  },
  "DEPUTADO FEDERAL|2006": {
    nome: "ROGÉRIO SOARES",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551888_div.jpg"
  },
  "DEPUTADO FEDERAL|2010": {
    nome: "MARIÂNGELA BANDEIRA",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551894_div.jpg"
  },
  "DEPUTADO FEDERAL|2011": {
    nome: "IVO MIL GRAU",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551886_div.jpg"
  },
  "DEPUTADO FEDERAL|2013": {
    nome: "BRUNA DAMASCENO",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551885_div.jpg"
  },
  "DEPUTADO FEDERAL|2024": {
    nome: "MAGNO LIMA",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551883_div.jpg"
  },
  "DEPUTADO FEDERAL|2025": {
    nome: "MUNDINHO DE ALCIDES",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551890_div.jpg"
  },
  "DEPUTADO FEDERAL|2026": {
    nome: "WELLINGTON SABOIA",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551879_div.jpg"
  },
  "DEPUTADO FEDERAL|2027": {
    nome: "HILÁRIO MACIEL",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551884_div.jpg"
  },
  "DEPUTADO FEDERAL|2030": {
    nome: "IGOR NOGUEIRA",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551882_div.jpg"
  },
  "DEPUTADO FEDERAL|2033": {
    nome: "SAMUEL JUNIOR",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551877_div.jpg"
  },
  "DEPUTADO FEDERAL|2035": {
    nome: "ADRIANA UCHOA",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551881_div.jpg"
  },
  "DEPUTADO FEDERAL|2040": {
    nome: "ANNE MORAIS",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551880_div.jpg"
  },
  "DEPUTADO FEDERAL|2044": {
    nome: "CHRIS ESTRELA",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551896_div.jpg"
  },
  "DEPUTADO FEDERAL|2045": {
    nome: "JOBSON FIGUEIREDO",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551887_div.jpg"
  },
  "DEPUTADO FEDERAL|2050": {
    nome: "TIAGO ISMAR",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551893_div.jpg"
  },
  "DEPUTADO FEDERAL|2055": {
    nome: "CLEMILDO FELICIO",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551889_div.jpg"
  },
  "DEPUTADO FEDERAL|2077": {
    nome: "JULLY COUTINHO",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551878_div.jpg"
  },
  "DEPUTADO FEDERAL|2085": {
    nome: "GABY TROPICAL",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002553270_div.jpg"
  },
  "DEPUTADO FEDERAL|2088": {
    nome: "PROFESSOR VANDEILTON",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002553271_div.jpg"
  },
  "DEPUTADO FEDERAL|2099": {
    nome: "ALÍPIO RODRIGUES",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551891_div.jpg"
  },
  "DEPUTADO FEDERAL|2200": {
    nome: "CARMELO NETO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536977_div.jpg"
  },
  "DEPUTADO FEDERAL|2201": {
    nome: "PRISCILA ROCHA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536978_div.jpg"
  },
  "DEPUTADO FEDERAL|2210": {
    nome: "CAROL MELLO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536986_div.jpg"
  },
  "DEPUTADO FEDERAL|2211": {
    nome: "PEDRO MATOS",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536969_div.jpg"
  },
  "DEPUTADO FEDERAL|2212": {
    nome: "MORONI",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536987_div.jpg"
  },
  "DEPUTADO FEDERAL|2215": {
    nome: "CESAR DO VALE",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536982_div.jpg"
  },
  "DEPUTADO FEDERAL|2220": {
    nome: "FRANCISCO FABIANO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536985_div.jpg"
  },
  "DEPUTADO FEDERAL|2222": {
    nome: "ANDRÉ FERNANDES",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536979_div.jpg"
  },
  "DEPUTADO FEDERAL|2224": {
    nome: "RUTH REBOUÇAS",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536966_div.jpg"
  },
  "DEPUTADO FEDERAL|2225": {
    nome: "NORA BARRETO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536973_div.jpg"
  },
  "DEPUTADO FEDERAL|2233": {
    nome: "JULIERME SENA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536968_div.jpg"
  },
  "DEPUTADO FEDERAL|2234": {
    nome: "CORONEL BEZERRA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536972_div.jpg"
  },
  "DEPUTADO FEDERAL|2244": {
    nome: "PPCELL",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536983_div.jpg"
  },
  "DEPUTADO FEDERAL|2252": {
    nome: "ALCYVANIA PINHEIRO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536980_div.jpg"
  },
  "DEPUTADO FEDERAL|2255": {
    nome: "DR ADRIANO BARBOSA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536971_div.jpg"
  },
  "DEPUTADO FEDERAL|2266": {
    nome: "DANILO RIBEIRO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536976_div.jpg"
  },
  "DEPUTADO FEDERAL|2270": {
    nome: "KAMILA CARDOSO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536975_div.jpg"
  },
  "DEPUTADO FEDERAL|2277": {
    nome: "DR JAZIEL",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536967_div.jpg"
  },
  "DEPUTADO FEDERAL|2278": {
    nome: "LUCINILDO FROTA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536981_div.jpg"
  },
  "DEPUTADO FEDERAL|2288": {
    nome: "PRISCILA COSTA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536974_div.jpg"
  },
  "DEPUTADO FEDERAL|2294": {
    nome: "ONEIDA PINHEIRO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536970_div.jpg"
  },
  "DEPUTADO FEDERAL|2299": {
    nome: "MATHEUS NORONHA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002536984_div.jpg"
  },
  "DEPUTADO FEDERAL|2300": {
    nome: "CARLOS EDUARDO REI DA PARODIA",
    partido: "CIDADANIA",
    foto: "assets/candidatos/FCE60002541575_div.jpg"
  },
  "DEPUTADO FEDERAL|2322": {
    nome: "CHICO ANTÔNIO",
    partido: "CIDADANIA",
    foto: "assets/candidatos/FCE60002541568_div.jpg"
  },
  "DEPUTADO FEDERAL|2323": {
    nome: "LUKÃO",
    partido: "CIDADANIA",
    foto: "assets/candidatos/FCE60002541577_div.jpg"
  },
  "DEPUTADO FEDERAL|2333": {
    nome: "SANDRINHA CAVALCANTE",
    partido: "CIDADANIA",
    foto: "assets/candidatos/FCE60002541567_div.jpg"
  },
  "DEPUTADO FEDERAL|2377": {
    nome: "ALTAIR DO PEIXE",
    partido: "CIDADANIA",
    foto: "assets/candidatos/FCE60002541572_div.jpg"
  },
  "DEPUTADO FEDERAL|2500": {
    nome: "ROSEANE DANDAN",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532980_div.jpg"
  },
  "DEPUTADO FEDERAL|2510": {
    nome: "HEITOR HOLANDA",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532974_div.jpg"
  },
  "DEPUTADO FEDERAL|2512": {
    nome: "ROSA MARIA DO JARDIM IRACEMA",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532982_div.jpg"
  },
  "DEPUTADO FEDERAL|2518": {
    nome: "ILDA ANGÉLICA",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532976_div.jpg"
  },
  "DEPUTADO FEDERAL|2525": {
    nome: "DANILO LOPES",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532968_div.jpg"
  },
  "DEPUTADO FEDERAL|2548": {
    nome: "DÉBORA NOGUEIRA",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532969_div.jpg"
  },
  "DEPUTADO FEDERAL|2555": {
    nome: "GIORDANNA MANO",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532981_div.jpg"
  },
  "DEPUTADO FEDERAL|2580": {
    nome: "CHIQUINHO DOS CARNEIROS",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532975_div.jpg"
  },
  "DEPUTADO FEDERAL|2588": {
    nome: "ROMULO PONTE",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532978_div.jpg"
  },
  "DEPUTADO FEDERAL|2589": {
    nome: "FLAVIO FG",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532979_div.jpg"
  },
  "DEPUTADO FEDERAL|2599": {
    nome: "COXINHA",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532970_div.jpg"
  },
  "DEPUTADO FEDERAL|2700": {
    nome: "ADERSON DAS FRUTAS",
    partido: "DC",
    foto: "assets/candidatos/FCE60002549973_div.jpg"
  },
  "DEPUTADO FEDERAL|2708": {
    nome: "NÚBIA FREIRE",
    partido: "DC",
    foto: "assets/candidatos/FCE60002549972_div.jpg"
  },
  "DEPUTADO FEDERAL|2722": {
    nome: "AILTON MACEDO",
    partido: "DC",
    foto: "assets/candidatos/FCE60002549974_div.jpg"
  },
  "DEPUTADO FEDERAL|2745": {
    nome: "DENIS TAVEIRA",
    partido: "DC",
    foto: "assets/candidatos/FCE60002549975_div.jpg"
  },
  "DEPUTADO FEDERAL|2777": {
    nome: "MISSIONÁRIA TANIELE",
    partido: "DC",
    foto: "assets/candidatos/FCE60002549971_div.jpg"
  },
  "DEPUTADO FEDERAL|2900": {
    nome: "GLAYCIANNE SAMPAIO",
    partido: "PCO",
    foto: "assets/candidatos/FCE60002553625_div.jpg"
  },
  "DEPUTADO FEDERAL|2929": {
    nome: "ARYTON MILES",
    partido: "PCO",
    foto: "assets/candidatos/FCE60002553627_div.jpg"
  },
  "DEPUTADO FEDERAL|2999": {
    nome: "AURENI VIEIRA",
    partido: "PCO",
    foto: "assets/candidatos/FCE60002553626_div.jpg"
  },
  "DEPUTADO FEDERAL|3000": {
    nome: "PAULO SAMPAIO",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538308_div.jpg"
  },
  "DEPUTADO FEDERAL|3001": {
    nome: "ALBINO OLIVEIRA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538314_div.jpg"
  },
  "DEPUTADO FEDERAL|3003": {
    nome: "RAQUEL MACHADO",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538315_div.jpg"
  },
  "DEPUTADO FEDERAL|3007": {
    nome: "SUBOFICIAL CARCARÁ",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538306_div.jpg"
  },
  "DEPUTADO FEDERAL|3009": {
    nome: "CAMILA BESSA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538313_div.jpg"
  },
  "DEPUTADO FEDERAL|3010": {
    nome: "ESCRIVÃO ÁTTILA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538310_div.jpg"
  },
  "DEPUTADO FEDERAL|3011": {
    nome: "DRA. LEIDIANE MAIA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538318_div.jpg"
  },
  "DEPUTADO FEDERAL|3020": {
    nome: "DR. EDMILSON BARROS",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538316_div.jpg"
  },
  "DEPUTADO FEDERAL|3022": {
    nome: "NIEL ROCHA (MIDAS)",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538317_div.jpg"
  },
  "DEPUTADO FEDERAL|3030": {
    nome: "CAROL SIEBRA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538312_div.jpg"
  },
  "DEPUTADO FEDERAL|3033": {
    nome: "ENGENHEIRO EMANUEL",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538311_div.jpg"
  },
  "DEPUTADO FEDERAL|3050": {
    nome: "IAGO SOUSA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002554311_div.jpg"
  },
  "DEPUTADO FEDERAL|3055": {
    nome: "IRMÃO JOAIS",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538307_div.jpg"
  },
  "DEPUTADO FEDERAL|3077": {
    nome: "RAFAEL ROCHA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002538309_div.jpg"
  },
  "DEPUTADO FEDERAL|3300": {
    nome: "FERNANDO XIMENES",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002536992_div.jpg"
  },
  "DEPUTADO FEDERAL|3312": {
    nome: "GIRLANDO RODRIGUES",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002536990_div.jpg"
  },
  "DEPUTADO FEDERAL|3321": {
    nome: "ELIENE LUDUVINO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002536993_div.jpg"
  },
  "DEPUTADO FEDERAL|3333": {
    nome: "AUGUSTO CORREIA LIMA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002536995_div.jpg"
  },
  "DEPUTADO FEDERAL|3380": {
    nome: "CICERO ANIMAL DAS PISTAS",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002536991_div.jpg"
  },
  "DEPUTADO FEDERAL|3399": {
    nome: "BETA DAS MARMITAS",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002536994_div.jpg"
  },
  "DEPUTADO FEDERAL|4000": {
    nome: "DENIS BEZERRA",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536708_div.jpg"
  },
  "DEPUTADO FEDERAL|4001": {
    nome: "PAI DO GAREL",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536705_div.jpg"
  },
  "DEPUTADO FEDERAL|4004": {
    nome: "WANDA DIONISIO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536701_div.jpg"
  },
  "DEPUTADO FEDERAL|4010": {
    nome: "MONIQUE VAQUEIRA",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536697_div.jpg"
  },
  "DEPUTADO FEDERAL|4011": {
    nome: "DANIELE PIMENTEL",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536709_div.jpg"
  },
  "DEPUTADO FEDERAL|4012": {
    nome: "GRACINHA RODRIGUES",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536704_div.jpg"
  },
  "DEPUTADO FEDERAL|4013": {
    nome: "EGIDIO GUERRA",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536702_div.jpg"
  },
  "DEPUTADO FEDERAL|4020": {
    nome: "ROBÉRIO MONTEIRO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536706_div.jpg"
  },
  "DEPUTADO FEDERAL|4040": {
    nome: "IDILVAN",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536699_div.jpg"
  },
  "DEPUTADO FEDERAL|4041": {
    nome: "RENATA VIEIRA",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536700_div.jpg"
  },
  "DEPUTADO FEDERAL|4044": {
    nome: "ROGER AGUIAR",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536707_div.jpg"
  },
  "DEPUTADO FEDERAL|4055": {
    nome: "DR. ACILON",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536698_div.jpg"
  },
  "DEPUTADO FEDERAL|4077": {
    nome: "TAINAH MARINHO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002545223_div.jpg"
  },
  "DEPUTADO FEDERAL|4321": {
    nome: "GIGI BARBOSA",
    partido: "PV",
    foto: "assets/candidatos/FCE60002540745_div.jpg"
  },
  "DEPUTADO FEDERAL|4333": {
    nome: "DR. JÚNIOR IBIAPINA",
    partido: "PV",
    foto: "assets/candidatos/FCE60002540752_div.jpg"
  },
  "DEPUTADO FEDERAL|4343": {
    nome: "EDUARDO BISMARCK",
    partido: "PV",
    foto: "assets/candidatos/FCE60002540732_div.jpg"
  },
  "DEPUTADO FEDERAL|4377": {
    nome: "MARIA BETHANIA",
    partido: "PV",
    foto: "assets/candidatos/FCE60002540738_div.jpg"
  },
  "DEPUTADO FEDERAL|4400": {
    nome: "GLAU AGUIAR",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534889_div.jpg"
  },
  "DEPUTADO FEDERAL|4404": {
    nome: "DRA CINTHIA BELINO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534885_div.jpg"
  },
  "DEPUTADO FEDERAL|4410": {
    nome: "CARLOS MATOS",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002535136_div.jpg"
  },
  "DEPUTADO FEDERAL|4411": {
    nome: "BARBARA DANTAS",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002535137_div.jpg"
  },
  "DEPUTADO FEDERAL|4412": {
    nome: "CLEA LUZ",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534882_div.jpg"
  },
  "DEPUTADO FEDERAL|4422": {
    nome: "CAPITÃO DANTAS",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534880_div.jpg"
  },
  "DEPUTADO FEDERAL|4426": {
    nome: "ROBERT",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002535138_div.jpg"
  },
  "DEPUTADO FEDERAL|4430": {
    nome: "LUCIO BRUNO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534884_div.jpg"
  },
  "DEPUTADO FEDERAL|4433": {
    nome: "DR. ALOISIO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534878_div.jpg"
  },
  "DEPUTADO FEDERAL|4443": {
    nome: "RENATA COAN",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002535139_div.jpg"
  },
  "DEPUTADO FEDERAL|4444": {
    nome: "MOSES RODRIGUES",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534893_div.jpg"
  },
  "DEPUTADO FEDERAL|4445": {
    nome: "DAYANY DO CAPITÃO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534887_div.jpg"
  },
  "DEPUTADO FEDERAL|4455": {
    nome: "MAURO FILHO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534879_div.jpg"
  },
  "DEPUTADO FEDERAL|4456": {
    nome: "ORLEANDO SILVA",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002535134_div.jpg"
  },
  "DEPUTADO FEDERAL|4466": {
    nome: "SÂMILA CAVALCANTE",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534890_div.jpg"
  },
  "DEPUTADO FEDERAL|4477": {
    nome: "ROMULO FERRER",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534883_div.jpg"
  },
  "DEPUTADO FEDERAL|4488": {
    nome: "DAYANNA COLAÇO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002535135_div.jpg"
  },
  "DEPUTADO FEDERAL|4490": {
    nome: "SOLDADO NOELIO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534891_div.jpg"
  },
  "DEPUTADO FEDERAL|4499": {
    nome: "ZÉ GERARDO ARRUDA",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002534892_div.jpg"
  },
  "DEPUTADO FEDERAL|4500": {
    nome: "UBIRAJARA É SHOW PAPAI",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541566_div.jpg"
  },
  "DEPUTADO FEDERAL|4501": {
    nome: "VYLLA BRASIL",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541579_div.jpg"
  },
  "DEPUTADO FEDERAL|4511": {
    nome: "ARTHUR SALDANHA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541580_div.jpg"
  },
  "DEPUTADO FEDERAL|4512": {
    nome: "SARGENTO GERSON",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541569_div.jpg"
  },
  "DEPUTADO FEDERAL|4515": {
    nome: "DR. EDIMIR MARTINS",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541565_div.jpg"
  },
  "DEPUTADO FEDERAL|4522": {
    nome: "GORDIM ARAÚJO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541570_div.jpg"
  },
  "DEPUTADO FEDERAL|4545": {
    nome: "JOSÉ SARTO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541564_div.jpg"
  },
  "DEPUTADO FEDERAL|4546": {
    nome: "BRÍGIDA TEIXEIRA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541562_div.jpg"
  },
  "DEPUTADO FEDERAL|4548": {
    nome: "DIANA CARVALHO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541573_div.jpg"
  },
  "DEPUTADO FEDERAL|4554": {
    nome: "THAYNARA SOUZA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002554366_div.jpg"
  },
  "DEPUTADO FEDERAL|4555": {
    nome: "ADAIL CARNEIRO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541576_div.jpg"
  },
  "DEPUTADO FEDERAL|4568": {
    nome: "ERINALDA GOMES",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541571_div.jpg"
  },
  "DEPUTADO FEDERAL|4578": {
    nome: "PROFESSOR LUÃ",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541582_div.jpg"
  },
  "DEPUTADO FEDERAL|4580": {
    nome: "DAVI LEITE",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541563_div.jpg"
  },
  "DEPUTADO FEDERAL|4588": {
    nome: "DRA. HEVERLINE MORAES",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541581_div.jpg"
  },
  "DEPUTADO FEDERAL|4592": {
    nome: "DR. ENDRIGO RESENDE",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541574_div.jpg"
  },
  "DEPUTADO FEDERAL|4599": {
    nome: "MARCO PRADO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541578_div.jpg"
  },
  "DEPUTADO FEDERAL|5000": {
    nome: "ANGELA ABUK",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538329_div.jpg"
  },
  "DEPUTADO FEDERAL|5001": {
    nome: "PROF. VALMIR ARRUDA",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538325_div.jpg"
  },
  "DEPUTADO FEDERAL|5005": {
    nome: "ANNA KARINA VOZES DA EDUCAÇÃO",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538321_div.jpg"
  },
  "DEPUTADO FEDERAL|5010": {
    nome: "EXPEDITO GUEDES DITO POPULAR",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538324_div.jpg"
  },
  "DEPUTADO FEDERAL|5012": {
    nome: "DAUYZIO",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538336_div.jpg"
  },
  "DEPUTADO FEDERAL|5013": {
    nome: "LORENA MOURA",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538332_div.jpg"
  },
  "DEPUTADO FEDERAL|5018": {
    nome: "PROFESSOR JARIR",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538337_div.jpg"
  },
  "DEPUTADO FEDERAL|5024": {
    nome: "NAYLA SILVA",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538334_div.jpg"
  },
  "DEPUTADO FEDERAL|5032": {
    nome: "BRUNA SILVA",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538323_div.jpg"
  },
  "DEPUTADO FEDERAL|5035": {
    nome: "WILTON SILVA",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538320_div.jpg"
  },
  "DEPUTADO FEDERAL|5050": {
    nome: "RENATO ROSENO",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538340_div.jpg"
  },
  "DEPUTADO FEDERAL|5055": {
    nome: "ANDRÉ COMARU",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538330_div.jpg"
  },
  "DEPUTADO FEDERAL|5077": {
    nome: "ADRIANA GERÔNIMO",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538333_div.jpg"
  },
  "DEPUTADO FEDERAL|5078": {
    nome: "PEDRO WILSON",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538339_div.jpg"
  },
  "DEPUTADO FEDERAL|5099": {
    nome: "PAI GERSON COLETIVO D TERREIRO",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538328_div.jpg"
  },
  "DEPUTADO FEDERAL|5510": {
    nome: "LÉIA ALVES",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537024_div.jpg"
  },
  "DEPUTADO FEDERAL|5511": {
    nome: "CÉLIO STUDART",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537016_div.jpg"
  },
  "DEPUTADO FEDERAL|5512": {
    nome: "DAMIÃO KELTSON",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537028_div.jpg"
  },
  "DEPUTADO FEDERAL|5520": {
    nome: "WILSSA DANTAS-INSTITUTO VIDAS",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537020_div.jpg"
  },
  "DEPUTADO FEDERAL|5522": {
    nome: "TIRIRICA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537025_div.jpg"
  },
  "DEPUTADO FEDERAL|5523": {
    nome: "LUANA RÉGIA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537015_div.jpg"
  },
  "DEPUTADO FEDERAL|5525": {
    nome: "DR. JUAN LOPES",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537031_div.jpg"
  },
  "DEPUTADO FEDERAL|5532": {
    nome: "RONIVALDO MAIA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537032_div.jpg"
  },
  "DEPUTADO FEDERAL|5533": {
    nome: "LUIZ GASTÃO",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537654_div.jpg"
  },
  "DEPUTADO FEDERAL|5544": {
    nome: "GRAU BIEL",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537029_div.jpg"
  },
  "DEPUTADO FEDERAL|5550": {
    nome: "WANDERSON ESTIMA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537026_div.jpg"
  },
  "DEPUTADO FEDERAL|5551": {
    nome: "SANTOS",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537023_div.jpg"
  },
  "DEPUTADO FEDERAL|5555": {
    nome: "DOMINGOS NETO",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537018_div.jpg"
  },
  "DEPUTADO FEDERAL|5557": {
    nome: "DELEGADO GELSON AUTISTA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537033_div.jpg"
  },
  "DEPUTADO FEDERAL|5566": {
    nome: "JULIANA COSTA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537019_div.jpg"
  },
  "DEPUTADO FEDERAL|5577": {
    nome: "DRA MAZÉ MAIA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537030_div.jpg"
  },
  "DEPUTADO FEDERAL|5578": {
    nome: "ROZIANE DA AUTO ESCOLA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537027_div.jpg"
  },
  "DEPUTADO FEDERAL|5580": {
    nome: "SANDRO RESULT",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537017_div.jpg"
  },
  "DEPUTADO FEDERAL|5588": {
    nome: "FERNANDA PESSOA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537021_div.jpg"
  },
  "DEPUTADO FEDERAL|5599": {
    nome: "ADRIANA ALMEIDA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537022_div.jpg"
  },
  "DEPUTADO FEDERAL|6513": {
    nome: "HELENA FERNANDES",
    partido: "PCDOB",
    foto: "assets/candidatos/FCE60002540731_div.jpg"
  },
  "DEPUTADO FEDERAL|6565": {
    nome: "INÁCIO ARRUDA",
    partido: "PCDOB",
    foto: "assets/candidatos/FCE60002540733_div.jpg"
  },
  "DEPUTADO FEDERAL|7000": {
    nome: "KLEYTON LIMA",
    partido: "AVANTE",
    foto: "assets/candidatos/FCE60002552511_div.jpg"
  },
  "DEPUTADO FEDERAL|7010": {
    nome: "DIMAS CARUARU",
    partido: "AVANTE",
    foto: "assets/candidatos/FCE60002552510_div.jpg"
  },
  "DEPUTADO FEDERAL|7030": {
    nome: "SULIANE SANTOS",
    partido: "AVANTE",
    foto: "assets/candidatos/FCE60002552507_div.jpg"
  },
  "DEPUTADO FEDERAL|7045": {
    nome: "BALBINO DE ALBUQUERQUE",
    partido: "AVANTE",
    foto: "assets/candidatos/FCE60002552509_div.jpg"
  },
  "DEPUTADO FEDERAL|7055": {
    nome: "JOÃO MARTINS",
    partido: "AVANTE",
    foto: "assets/candidatos/FCE60002552508_div.jpg"
  },
  "DEPUTADO FEDERAL|7077": {
    nome: "MÔNICA SANTOS",
    partido: "AVANTE",
    foto: "assets/candidatos/FCE60002552512_div.jpg"
  },
  "DEPUTADO FEDERAL|7700": {
    nome: "EMANUEL ACRIZIO",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532983_div.jpg"
  },
  "DEPUTADO FEDERAL|7707": {
    nome: "JACKY QUEIROZ",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532985_div.jpg"
  },
  "DEPUTADO FEDERAL|7711": {
    nome: "VANDERLAN ALVES",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532973_div.jpg"
  },
  "DEPUTADO FEDERAL|7715": {
    nome: "NADIJANE DO UBER",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532972_div.jpg"
  },
  "DEPUTADO FEDERAL|7717": {
    nome: "LUIZ RICARDO",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002553941_div.jpg"
  },
  "DEPUTADO FEDERAL|7733": {
    nome: "CELIO TERCEIRO",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002553940_div.jpg"
  },
  "DEPUTADO FEDERAL|7734": {
    nome: "PR JADAS REIS",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532971_div.jpg"
  },
  "DEPUTADO FEDERAL|7744": {
    nome: "MANOEL DEODATO",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532967_div.jpg"
  },
  "DEPUTADO FEDERAL|7755": {
    nome: "AMÉLIA BEZERRA",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532984_div.jpg"
  },
  "DEPUTADO FEDERAL|7777": {
    nome: "VAIDON OLIVEIRA",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532966_div.jpg"
  },
  "DEPUTADO FEDERAL|7788": {
    nome: "ENFERMEIRA  ANA PAULA",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532977_div.jpg"
  },
  "DEPUTADO FEDERAL|8000": {
    nome: "HAROLDO NETO",
    partido: "UP",
    foto: "assets/candidatos/FCE60002533963_div.jpg"
  },
  "DEPUTADO FEDERAL|8080": {
    nome: "SUED CARVALHO",
    partido: "UP",
    foto: "assets/candidatos/FCE60002533962_div.jpg"
  },
  "DEPUTADO FEDERAL|8088": {
    nome: "LUCAS MONTE",
    partido: "UP",
    foto: "assets/candidatos/FCE60002538944_div.jpg"
  },
  "DEPUTADO ESTADUAL|10000": {
    nome: "SILVIO NASCIMENTO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545110_div.jpg"
  },
  "DEPUTADO ESTADUAL|10001": {
    nome: "PROFESSORA LEILA",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545119_div.jpg"
  },
  "DEPUTADO ESTADUAL|10005": {
    nome: "LINDA MASCARENHAS",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002553894_div.jpg"
  },
  "DEPUTADO ESTADUAL|10007": {
    nome: "SAMUEL FALCÃO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545124_div.jpg"
  },
  "DEPUTADO ESTADUAL|10010": {
    nome: "IGOR LEITÃO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545118_div.jpg"
  },
  "DEPUTADO ESTADUAL|10011": {
    nome: "ELIMAR ARAGAO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545127_div.jpg"
  },
  "DEPUTADO ESTADUAL|10015": {
    nome: "CÉLIA DA ENFERMAGEM",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545130_div.jpg"
  },
  "DEPUTADO ESTADUAL|10020": {
    nome: "PASTOR RENATO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002553891_div.jpg"
  },
  "DEPUTADO ESTADUAL|10070": {
    nome: "CELINA FERNANDES",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545121_div.jpg"
  },
  "DEPUTADO ESTADUAL|10099": {
    nome: "GIL BARATHA",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002553888_div.jpg"
  },
  "DEPUTADO ESTADUAL|10100": {
    nome: "PEDRO LOBO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545112_div.jpg"
  },
  "DEPUTADO ESTADUAL|10101": {
    nome: "AVELINO DO POVO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545120_div.jpg"
  },
  "DEPUTADO ESTADUAL|10110": {
    nome: "DENIS BRITO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545126_div.jpg"
  },
  "DEPUTADO ESTADUAL|10111": {
    nome: "ROBERTO CARIRI",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545129_div.jpg"
  },
  "DEPUTADO ESTADUAL|10121": {
    nome: "WILL FRANÇA",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545107_div.jpg"
  },
  "DEPUTADO ESTADUAL|10123": {
    nome: "DAVID DURAND",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545115_div.jpg"
  },
  "DEPUTADO ESTADUAL|10222": {
    nome: "ANDERSON FEITOSA",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545128_div.jpg"
  },
  "DEPUTADO ESTADUAL|10234": {
    nome: "DIEGO BARRETO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545123_div.jpg"
  },
  "DEPUTADO ESTADUAL|10321": {
    nome: "VIRGINIA NERY",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002553887_div.jpg"
  },
  "DEPUTADO ESTADUAL|10333": {
    nome: "GARDEL ROLIM",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545132_div.jpg"
  },
  "DEPUTADO ESTADUAL|10345": {
    nome: "CARLOS HENRIQUE",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002553892_div.jpg"
  },
  "DEPUTADO ESTADUAL|10369": {
    nome: "FATIMA GOMES",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545111_div.jpg"
  },
  "DEPUTADO ESTADUAL|10444": {
    nome: "MÁRCIO MARTINS",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545113_div.jpg"
  },
  "DEPUTADO ESTADUAL|10456": {
    nome: "PROFESSOR NIVALDO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545125_div.jpg"
  },
  "DEPUTADO ESTADUAL|10478": {
    nome: "PEDRO ALMEIDA",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545116_div.jpg"
  },
  "DEPUTADO ESTADUAL|10555": {
    nome: "MARIA TEREZA",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002553890_div.jpg"
  },
  "DEPUTADO ESTADUAL|10600": {
    nome: "LENNA DO POVO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545108_div.jpg"
  },
  "DEPUTADO ESTADUAL|10655": {
    nome: "PALHAÇO TUTU",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002553889_div.jpg"
  },
  "DEPUTADO ESTADUAL|10678": {
    nome: "DEP FERNANDO HUGO - DR HUGO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545114_div.jpg"
  },
  "DEPUTADO ESTADUAL|10700": {
    nome: "RUBÃO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002553893_div.jpg"
  },
  "DEPUTADO ESTADUAL|10777": {
    nome: "PASTOR SOUSA",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545117_div.jpg"
  },
  "DEPUTADO ESTADUAL|10800": {
    nome: "GILVAN DO NASCIMENTO",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545122_div.jpg"
  },
  "DEPUTADO ESTADUAL|10879": {
    nome: "TONY SILVA",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002553886_div.jpg"
  },
  "DEPUTADO ESTADUAL|10888": {
    nome: "ENFERMEIRA CRISTIANE COLARES",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545109_div.jpg"
  },
  "DEPUTADO ESTADUAL|10999": {
    nome: "KLEITON ANDRADE",
    partido: "REPUBLICANOS",
    foto: "assets/candidatos/FCE60002545131_div.jpg"
  },
  "DEPUTADO ESTADUAL|11000": {
    nome: "VALDIVINO LOPES",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536207_div.jpg"
  },
  "DEPUTADO ESTADUAL|11010": {
    nome: "ROSA ANDRADE",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536202_div.jpg"
  },
  "DEPUTADO ESTADUAL|11011": {
    nome: "BRUNO BENEVIDES",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536208_div.jpg"
  },
  "DEPUTADO ESTADUAL|11100": {
    nome: "MABEL DE CARVALHO",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536210_div.jpg"
  },
  "DEPUTADO ESTADUAL|11111": {
    nome: "ZEZINHO ALBUQUERQUE",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536196_div.jpg"
  },
  "DEPUTADO ESTADUAL|11222": {
    nome: "THIAGO CAMPELO",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536188_div.jpg"
  },
  "DEPUTADO ESTADUAL|11234": {
    nome: "ABEDE NEGRO",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536175_div.jpg"
  },
  "DEPUTADO ESTADUAL|11456": {
    nome: "JU DO CONJUNTO CEARÁ",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536187_div.jpg"
  },
  "DEPUTADO ESTADUAL|11555": {
    nome: "ARIZA SILVA",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536177_div.jpg"
  },
  "DEPUTADO ESTADUAL|11777": {
    nome: "SÉRGIO FREITAS",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536168_div.jpg"
  },
  "DEPUTADO ESTADUAL|11789": {
    nome: "FLÁVIO HOLANDA",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536186_div.jpg"
  },
  "DEPUTADO ESTADUAL|11888": {
    nome: "RODOLFO DA FARMÁCIA",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536204_div.jpg"
  },
  "DEPUTADO ESTADUAL|11999": {
    nome: "DANILO DA MERENDA",
    partido: "PP",
    foto: "assets/candidatos/FCE60002536170_div.jpg"
  },
  "DEPUTADO ESTADUAL|12002": {
    nome: "CHAVES FILHO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536609_div.jpg"
  },
  "DEPUTADO ESTADUAL|12022": {
    nome: "MARCOS CAUCAIA",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536611_div.jpg"
  },
  "DEPUTADO ESTADUAL|12033": {
    nome: "PASTOR RAIMUNDO NONATO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536610_div.jpg"
  },
  "DEPUTADO ESTADUAL|12105": {
    nome: "LARISSA PALHETA",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536619_div.jpg"
  },
  "DEPUTADO ESTADUAL|12120": {
    nome: "AURICELIO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536617_div.jpg"
  },
  "DEPUTADO ESTADUAL|12123": {
    nome: "NETO DO PECEM",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536621_div.jpg"
  },
  "DEPUTADO ESTADUAL|12130": {
    nome: "FARLIANNY MAGALHAES",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536616_div.jpg"
  },
  "DEPUTADO ESTADUAL|12200": {
    nome: "GISELLI MOREIRA",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536623_div.jpg"
  },
  "DEPUTADO ESTADUAL|12222": {
    nome: "ANDRE GALDINO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536622_div.jpg"
  },
  "DEPUTADO ESTADUAL|12333": {
    nome: "CORUJÃO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536613_div.jpg"
  },
  "DEPUTADO ESTADUAL|12345": {
    nome: "MARONI RAMALHO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536612_div.jpg"
  },
  "DEPUTADO ESTADUAL|12377": {
    nome: "JUCY TAVARES",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536615_div.jpg"
  },
  "DEPUTADO ESTADUAL|12512": {
    nome: "TONINHO FURTADO",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536620_div.jpg"
  },
  "DEPUTADO ESTADUAL|12700": {
    nome: "LUZARDO GUIMARÃES DA CRUZ",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536618_div.jpg"
  },
  "DEPUTADO ESTADUAL|12777": {
    nome: "SAMANTHA JOYCE",
    partido: "PDT",
    foto: "assets/candidatos/FCE60002536614_div.jpg"
  },
  "DEPUTADO ESTADUAL|13000": {
    nome: "BRUNO PEDROSA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540710_div.jpg"
  },
  "DEPUTADO ESTADUAL|13003": {
    nome: "EDNA ISRAEL",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540703_div.jpg"
  },
  "DEPUTADO ESTADUAL|13013": {
    nome: "JADE ROMERO",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540708_div.jpg"
  },
  "DEPUTADO ESTADUAL|13100": {
    nome: "DONA BRUNA DO PT",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540700_div.jpg"
  },
  "DEPUTADO ESTADUAL|13111": {
    nome: "LAIS NUNES",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540714_div.jpg"
  },
  "DEPUTADO ESTADUAL|13113": {
    nome: "PROFESSORA ADRIANA ALMEIDA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540728_div.jpg"
  },
  "DEPUTADO ESTADUAL|13123": {
    nome: "MISSIAS DIAS",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540709_div.jpg"
  },
  "DEPUTADO ESTADUAL|13130": {
    nome: "PROFESSORA TERESINHA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540695_div.jpg"
  },
  "DEPUTADO ESTADUAL|13131": {
    nome: "CATANHO",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540730_div.jpg"
  },
  "DEPUTADO ESTADUAL|13132": {
    nome: "ACRÍSIO SENA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540715_div.jpg"
  },
  "DEPUTADO ESTADUAL|13133": {
    nome: "LIZIANY MEDEIROS",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540719_div.jpg"
  },
  "DEPUTADO ESTADUAL|13180": {
    nome: "PROFESSORA MAYA ELIZ",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540705_div.jpg"
  },
  "DEPUTADO ESTADUAL|13220": {
    nome: "LUANA VALIM",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540716_div.jpg"
  },
  "DEPUTADO ESTADUAL|13222": {
    nome: "FRANZÉ CARNEIRO",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540698_div.jpg"
  },
  "DEPUTADO ESTADUAL|13223": {
    nome: "PROFESSOR BEZERRA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540707_div.jpg"
  },
  "DEPUTADO ESTADUAL|13234": {
    nome: "GUILHERME SAMPAIO",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540711_div.jpg"
  },
  "DEPUTADO ESTADUAL|13258": {
    nome: "JÔ FARIAS",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540713_div.jpg"
  },
  "DEPUTADO ESTADUAL|13333": {
    nome: "MOISÉS BRAZ",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540729_div.jpg"
  },
  "DEPUTADO ESTADUAL|13444": {
    nome: "ELIANA ESTRELA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540704_div.jpg"
  },
  "DEPUTADO ESTADUAL|13456": {
    nome: "DE ASSIS DINIZ",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540712_div.jpg"
  },
  "DEPUTADO ESTADUAL|13555": {
    nome: "RENO XIMENES",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540724_div.jpg"
  },
  "DEPUTADO ESTADUAL|13700": {
    nome: "GADYEL",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540717_div.jpg"
  },
  "DEPUTADO ESTADUAL|13777": {
    nome: "NIZO COSTA",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540727_div.jpg"
  },
  "DEPUTADO ESTADUAL|13780": {
    nome: "ALYSON SOARES",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540723_div.jpg"
  },
  "DEPUTADO ESTADUAL|13789": {
    nome: "JULINHO",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540718_div.jpg"
  },
  "DEPUTADO ESTADUAL|13888": {
    nome: "ZÉ AILTON",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540720_div.jpg"
  },
  "DEPUTADO ESTADUAL|13999": {
    nome: "ILO NETO",
    partido: "PT",
    foto: "assets/candidatos/FCE60002540726_div.jpg"
  },
  "DEPUTADO ESTADUAL|15000": {
    nome: "APÓSTOLO LUIZ HENRIQUE",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542453_div.jpg"
  },
  "DEPUTADO ESTADUAL|15007": {
    nome: "AGOPIN.COM",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542463_div.jpg"
  },
  "DEPUTADO ESTADUAL|15010": {
    nome: "DRA CÁSSIA SALDANHA",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542460_div.jpg"
  },
  "DEPUTADO ESTADUAL|15111": {
    nome: "AMÁLIA LOPES",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542451_div.jpg"
  },
  "DEPUTADO ESTADUAL|15123": {
    nome: "DR. WASHINGTON",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542452_div.jpg"
  },
  "DEPUTADO ESTADUAL|15190": {
    nome: "CAIO DA SAÚDE",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542456_div.jpg"
  },
  "DEPUTADO ESTADUAL|15192": {
    nome: "ENFERMEIRA VIRGÍNIA",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542454_div.jpg"
  },
  "DEPUTADO ESTADUAL|15222": {
    nome: "DAVI DE RAIMUNDÃO",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542459_div.jpg"
  },
  "DEPUTADO ESTADUAL|15321": {
    nome: "DRA ZUÍLA",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542462_div.jpg"
  },
  "DEPUTADO ESTADUAL|15333": {
    nome: "DANNIEL OLIVEIRA",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542461_div.jpg"
  },
  "DEPUTADO ESTADUAL|15444": {
    nome: "ZENIR BASTOS",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542458_div.jpg"
  },
  "DEPUTADO ESTADUAL|15555": {
    nome: "FELIPE AGUIAR",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542455_div.jpg"
  },
  "DEPUTADO ESTADUAL|15580": {
    nome: "HERIALDO BARROCAS",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542464_div.jpg"
  },
  "DEPUTADO ESTADUAL|15678": {
    nome: "VETERINÁRIA ROSÂNIA RAMALHO",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542450_div.jpg"
  },
  "DEPUTADO ESTADUAL|15777": {
    nome: "RUBÊNIA DA SAÚDE",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542465_div.jpg"
  },
  "DEPUTADO ESTADUAL|15888": {
    nome: "LARISSA DELUCCA",
    partido: "MDB",
    foto: "assets/candidatos/FCE60002542457_div.jpg"
  },
  "DEPUTADO ESTADUAL|16000": {
    nome: "RAIMUNDO BANCADA OPERÁRIA",
    partido: "PSTU",
    foto: "assets/candidatos/FCE60002553981_div.jpg"
  },
  "DEPUTADO ESTADUAL|16132": {
    nome: "CIBELE",
    partido: "PSTU",
    foto: "assets/candidatos/FCE60002550751_div.jpg"
  },
  "DEPUTADO ESTADUAL|18108": {
    nome: "VAIKUNTHA DO MANDIR",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538636_div.jpg"
  },
  "DEPUTADO ESTADUAL|18123": {
    nome: "PROFESSORA MARGARETE LEITE",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538642_div.jpg"
  },
  "DEPUTADO ESTADUAL|18180": {
    nome: "ROBERTA DA HORTA",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538638_div.jpg"
  },
  "DEPUTADO ESTADUAL|18181": {
    nome: "PAULO HENRIQUE",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538351_div.jpg"
  },
  "DEPUTADO ESTADUAL|18234": {
    nome: "WILSON SILVA",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538346_div.jpg"
  },
  "DEPUTADO ESTADUAL|18333": {
    nome: "ROSE DO CARIRI",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538641_div.jpg"
  },
  "DEPUTADO ESTADUAL|18420": {
    nome: "ÍTALO COELHO",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538342_div.jpg"
  },
  "DEPUTADO ESTADUAL|18777": {
    nome: "LIMA SABOIA",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538345_div.jpg"
  },
  "DEPUTADO ESTADUAL|18888": {
    nome: "PROFESSORA GABRIELLA",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002538637_div.jpg"
  },
  "DEPUTADO ESTADUAL|20000": {
    nome: "REGININHA DUARTE",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551898_div.jpg"
  },
  "DEPUTADO ESTADUAL|20777": {
    nome: "ELPIDIO ROCHA",
    partido: "PODE",
    foto: "assets/candidatos/FCE60002551897_div.jpg"
  },
  "DEPUTADO ESTADUAL|22000": {
    nome: "DRA MAYRA PINHEIRO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542831_div.jpg"
  },
  "DEPUTADO ESTADUAL|22001": {
    nome: "BETÃO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542830_div.jpg"
  },
  "DEPUTADO ESTADUAL|22007": {
    nome: "PASTOR FRANCISCO GOMES",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542835_div.jpg"
  },
  "DEPUTADO ESTADUAL|22022": {
    nome: "BELLA CARMELO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542851_div.jpg"
  },
  "DEPUTADO ESTADUAL|22026": {
    nome: "NORDESTINA ANANDA OLIVEIRA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542850_div.jpg"
  },
  "DEPUTADO ESTADUAL|22033": {
    nome: "DENIS GOMES",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542834_div.jpg"
  },
  "DEPUTADO ESTADUAL|22111": {
    nome: "ALEX CEARA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542821_div.jpg"
  },
  "DEPUTADO ESTADUAL|22122": {
    nome: "RUBENILDO CADEIRA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542820_div.jpg"
  },
  "DEPUTADO ESTADUAL|22130": {
    nome: "ADLER GIRÃO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542822_div.jpg"
  },
  "DEPUTADO ESTADUAL|22180": {
    nome: "SARGENTO MICHELLY",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542826_div.jpg"
  },
  "DEPUTADO ESTADUAL|22190": {
    nome: "SARGENTO BORGES",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542847_div.jpg"
  },
  "DEPUTADO ESTADUAL|22218": {
    nome: "GRAZI DOS PRATIN",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542837_div.jpg"
  },
  "DEPUTADO ESTADUAL|22220": {
    nome: "BOAZ",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542841_div.jpg"
  },
  "DEPUTADO ESTADUAL|22221": {
    nome: "ABREU JUNIOR",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542833_div.jpg"
  },
  "DEPUTADO ESTADUAL|22222": {
    nome: "TANCREDO DOS SANTOS",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542842_div.jpg"
  },
  "DEPUTADO ESTADUAL|22223": {
    nome: "DAVID VASCONCELOS",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542845_div.jpg"
  },
  "DEPUTADO ESTADUAL|22322": {
    nome: "EDILENE PESSOA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542849_div.jpg"
  },
  "DEPUTADO ESTADUAL|22345": {
    nome: "DR MARCIO RONEY",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542843_div.jpg"
  },
  "DEPUTADO ESTADUAL|22422": {
    nome: "DR JOÃO MARTINS",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542836_div.jpg"
  },
  "DEPUTADO ESTADUAL|22441": {
    nome: "EDICELMA FREITAS",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542839_div.jpg"
  },
  "DEPUTADO ESTADUAL|22444": {
    nome: "DANYEL ARAÚJO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542840_div.jpg"
  },
  "DEPUTADO ESTADUAL|22456": {
    nome: "RONI CAMARDELLY",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542818_div.jpg"
  },
  "DEPUTADO ESTADUAL|22484": {
    nome: "HILA BERNARDES",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542846_div.jpg"
  },
  "DEPUTADO ESTADUAL|22522": {
    nome: "ALCY PINHEIRO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542838_div.jpg"
  },
  "DEPUTADO ESTADUAL|22555": {
    nome: "MACKFLAY",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542824_div.jpg"
  },
  "DEPUTADO ESTADUAL|22580": {
    nome: "CARLOS KLEBER",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542828_div.jpg"
  },
  "DEPUTADO ESTADUAL|22700": {
    nome: "WILMA LUIZ",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542848_div.jpg"
  },
  "DEPUTADO ESTADUAL|22722": {
    nome: "RUTE RODRIGUES",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542825_div.jpg"
  },
  "DEPUTADO ESTADUAL|22762": {
    nome: "EGINA SANTIAGO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542844_div.jpg"
  },
  "DEPUTADO ESTADUAL|22777": {
    nome: "DRA SILVANA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542832_div.jpg"
  },
  "DEPUTADO ESTADUAL|22789": {
    nome: "PAULA GOMES",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542819_div.jpg"
  },
  "DEPUTADO ESTADUAL|22822": {
    nome: "LEVY TEIXEIRA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542823_div.jpg"
  },
  "DEPUTADO ESTADUAL|22888": {
    nome: "PASTOR FROTA",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542827_div.jpg"
  },
  "DEPUTADO ESTADUAL|22999": {
    nome: "QUEIROZ DO POVO",
    partido: "PL",
    foto: "assets/candidatos/FCE60002542829_div.jpg"
  },
  "DEPUTADO ESTADUAL|25000": {
    nome: "MANU MORAIS",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532460_div.jpg"
  },
  "DEPUTADO ESTADUAL|25011": {
    nome: "REGINALDO COELHO",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532470_div.jpg"
  },
  "DEPUTADO ESTADUAL|25013": {
    nome: "DEUSA GOMES",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532448_div.jpg"
  },
  "DEPUTADO ESTADUAL|25055": {
    nome: "SARGENTO WALKIMAR",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002553996_div.jpg"
  },
  "DEPUTADO ESTADUAL|25111": {
    nome: "ANTONIO PLÍNIO",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532468_div.jpg"
  },
  "DEPUTADO ESTADUAL|25123": {
    nome: "SAMARA CORDEIRO",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532466_div.jpg"
  },
  "DEPUTADO ESTADUAL|25222": {
    nome: "MARCIO JÓIAS",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532462_div.jpg"
  },
  "DEPUTADO ESTADUAL|25333": {
    nome: "JORNALISTA MARINHO",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002553997_div.jpg"
  },
  "DEPUTADO ESTADUAL|25444": {
    nome: "GIOVANNI SAMPAIO",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532464_div.jpg"
  },
  "DEPUTADO ESTADUAL|25555": {
    nome: "KEIVIA DIAS",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532463_div.jpg"
  },
  "DEPUTADO ESTADUAL|25789": {
    nome: "JULIO CESAR",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532453_div.jpg"
  },
  "DEPUTADO ESTADUAL|25888": {
    nome: "RICARDO SALES",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532459_div.jpg"
  },
  "DEPUTADO ESTADUAL|25999": {
    nome: "DARLAN LOBO",
    partido: "PRD",
    foto: "assets/candidatos/FCE60002532465_div.jpg"
  },
  "DEPUTADO ESTADUAL|30000": {
    nome: "JEOVANE BARROS",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540353_div.jpg"
  },
  "DEPUTADO ESTADUAL|30007": {
    nome: "EVILASIO SILVA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540339_div.jpg"
  },
  "DEPUTADO ESTADUAL|30100": {
    nome: "SOLANO BASTOS",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540345_div.jpg"
  },
  "DEPUTADO ESTADUAL|30111": {
    nome: "ORIEL MOTA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540349_div.jpg"
  },
  "DEPUTADO ESTADUAL|30123": {
    nome: "PROFETA TUBARÃO",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540351_div.jpg"
  },
  "DEPUTADO ESTADUAL|30147": {
    nome: "MURILO BRAGA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540347_div.jpg"
  },
  "DEPUTADO ESTADUAL|30192": {
    nome: "LUZIA MOTA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540341_div.jpg"
  },
  "DEPUTADO ESTADUAL|30200": {
    nome: "RICARDO FREITAS",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540344_div.jpg"
  },
  "DEPUTADO ESTADUAL|30222": {
    nome: "NÁDIA WLÁDINA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540352_div.jpg"
  },
  "DEPUTADO ESTADUAL|30300": {
    nome: "BRITO",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540350_div.jpg"
  },
  "DEPUTADO ESTADUAL|30330": {
    nome: "ZEL MAGALHÃES",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540343_div.jpg"
  },
  "DEPUTADO ESTADUAL|30350": {
    nome: "IAGO SOUSA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540340_div.jpg"
  },
  "DEPUTADO ESTADUAL|30456": {
    nome: "TURIKA SHOW",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540346_div.jpg"
  },
  "DEPUTADO ESTADUAL|30500": {
    nome: "PASTOR JOÃO LUÍS",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540342_div.jpg"
  },
  "DEPUTADO ESTADUAL|30722": {
    nome: "VIANINHA DA FEDERAL",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540348_div.jpg"
  },
  "DEPUTADO ESTADUAL|30745": {
    nome: "SANDRA LUSTOSA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002540354_div.jpg"
  },
  "DEPUTADO ESTADUAL|33000": {
    nome: "CARLOS JUNIOR",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535630_div.jpg"
  },
  "DEPUTADO ESTADUAL|33002": {
    nome: "SEYSSA CARVALHO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535616_div.jpg"
  },
  "DEPUTADO ESTADUAL|33007": {
    nome: "NEGUINHA CARVALHO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535644_div.jpg"
  },
  "DEPUTADO ESTADUAL|33022": {
    nome: "ELIANE DO ESCRITORIO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535633_div.jpg"
  },
  "DEPUTADO ESTADUAL|33111": {
    nome: "MARIANO DA PICANHA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535622_div.jpg"
  },
  "DEPUTADO ESTADUAL|33123": {
    nome: "TOMAZ HOLANDA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535628_div.jpg"
  },
  "DEPUTADO ESTADUAL|33144": {
    nome: "TIA HILDA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535621_div.jpg"
  },
  "DEPUTADO ESTADUAL|33147": {
    nome: "DR. LUIS AUGUSTO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535635_div.jpg"
  },
  "DEPUTADO ESTADUAL|33180": {
    nome: "ADRIANA MARTINS",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535625_div.jpg"
  },
  "DEPUTADO ESTADUAL|33190": {
    nome: "CAPITÃO SILVA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535618_div.jpg"
  },
  "DEPUTADO ESTADUAL|33222": {
    nome: "MANO MORAIS",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535642_div.jpg"
  },
  "DEPUTADO ESTADUAL|33233": {
    nome: "VALERIA VIDAL",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535133_div.jpg"
  },
  "DEPUTADO ESTADUAL|33234": {
    nome: "CARLOS NASSA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535623_div.jpg"
  },
  "DEPUTADO ESTADUAL|33244": {
    nome: "HELENA FEIRANTE",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535637_div.jpg"
  },
  "DEPUTADO ESTADUAL|33300": {
    nome: "CONSUL DO POVO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535643_div.jpg"
  },
  "DEPUTADO ESTADUAL|33309": {
    nome: "KÊKINHA DE KÊKA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535615_div.jpg"
  },
  "DEPUTADO ESTADUAL|33330": {
    nome: "PROFESSOR MARQUINHO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535641_div.jpg"
  },
  "DEPUTADO ESTADUAL|33333": {
    nome: "MAFALDA GUERRA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535638_div.jpg"
  },
  "DEPUTADO ESTADUAL|33443": {
    nome: "IVANDI ARRAIS",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535636_div.jpg"
  },
  "DEPUTADO ESTADUAL|33444": {
    nome: "DR. HENRIQUE NETO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535631_div.jpg"
  },
  "DEPUTADO ESTADUAL|33456": {
    nome: "BOSCO JUNIOR",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535627_div.jpg"
  },
  "DEPUTADO ESTADUAL|33520": {
    nome: "CLAUDIA CAVALCANTE",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535645_div.jpg"
  },
  "DEPUTADO ESTADUAL|33522": {
    nome: "HERIALDO FURTADO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535629_div.jpg"
  },
  "DEPUTADO ESTADUAL|33533": {
    nome: "CHICO JOIA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535620_div.jpg"
  },
  "DEPUTADO ESTADUAL|33555": {
    nome: "SANTIAGO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535626_div.jpg"
  },
  "DEPUTADO ESTADUAL|33600": {
    nome: "LILIANY LOPES MASSOTERAPEUTA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535634_div.jpg"
  },
  "DEPUTADO ESTADUAL|33622": {
    nome: "O PORTUGUES",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535647_div.jpg"
  },
  "DEPUTADO ESTADUAL|33678": {
    nome: "VALDA FREITAS",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535614_div.jpg"
  },
  "DEPUTADO ESTADUAL|33700": {
    nome: "VANDECI SINCERO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535619_div.jpg"
  },
  "DEPUTADO ESTADUAL|33777": {
    nome: "FERNANDO AGUIAR",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535617_div.jpg"
  },
  "DEPUTADO ESTADUAL|33789": {
    nome: "LUIS CLAUDIO DA SAÚDE",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535624_div.jpg"
  },
  "DEPUTADO ESTADUAL|33800": {
    nome: "MISSIONÁRIA CILENE",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535632_div.jpg"
  },
  "DEPUTADO ESTADUAL|33833": {
    nome: "ARLINDO NEVOA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535646_div.jpg"
  },
  "DEPUTADO ESTADUAL|33900": {
    nome: "LUCIANO BAZILIO",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535639_div.jpg"
  },
  "DEPUTADO ESTADUAL|33999": {
    nome: "CLAUDENOR VIEIRA",
    partido: "MOBILIZA",
    foto: "assets/candidatos/FCE60002535640_div.jpg"
  },
  "DEPUTADO ESTADUAL|40000": {
    nome: "ANTONIO GRANJA",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536695_div.jpg"
  },
  "DEPUTADO ESTADUAL|40040": {
    nome: "DR.ESCOCIO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536681_div.jpg"
  },
  "DEPUTADO ESTADUAL|40055": {
    nome: "LUIZ SERGIO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536693_div.jpg"
  },
  "DEPUTADO ESTADUAL|40100": {
    nome: "MANU PIMENTA",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536680_div.jpg"
  },
  "DEPUTADO ESTADUAL|40101": {
    nome: "WILSON DA BACANA",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536685_div.jpg"
  },
  "DEPUTADO ESTADUAL|40110": {
    nome: "EULOGIO NETO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536671_div.jpg"
  },
  "DEPUTADO ESTADUAL|40111": {
    nome: "DR. GERONIMO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536690_div.jpg"
  },
  "DEPUTADO ESTADUAL|40112": {
    nome: "BRUNO FIGUEIREDO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536675_div.jpg"
  },
  "DEPUTADO ESTADUAL|40114": {
    nome: "GUILHERME LANDIM",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536687_div.jpg"
  },
  "DEPUTADO ESTADUAL|40123": {
    nome: "LIA GOMES",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536667_div.jpg"
  },
  "DEPUTADO ESTADUAL|40140": {
    nome: "RAIANE DA BÁ",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536696_div.jpg"
  },
  "DEPUTADO ESTADUAL|40200": {
    nome: "ELIZEU MONTEIRO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536670_div.jpg"
  },
  "DEPUTADO ESTADUAL|40222": {
    nome: "OSMAR BAQUIT",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536679_div.jpg"
  },
  "DEPUTADO ESTADUAL|40234": {
    nome: "DR. LUCILVIO GIRÃO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536682_div.jpg"
  },
  "DEPUTADO ESTADUAL|40321": {
    nome: "DRA.VERONICA GURGEL ENFERMEIRA",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536669_div.jpg"
  },
  "DEPUTADO ESTADUAL|40333": {
    nome: "MARCOS SOBREIRA",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536673_div.jpg"
  },
  "DEPUTADO ESTADUAL|40345": {
    nome: "PAULINHA BRAGA",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536678_div.jpg"
  },
  "DEPUTADO ESTADUAL|40400": {
    nome: "LEONELZINHO ALENCAR",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536694_div.jpg"
  },
  "DEPUTADO ESTADUAL|40444": {
    nome: "JEOVÁ MOTA",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536677_div.jpg"
  },
  "DEPUTADO ESTADUAL|40456": {
    nome: "GUILHERME BISMARCK",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536691_div.jpg"
  },
  "DEPUTADO ESTADUAL|40500": {
    nome: "SALMITO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536684_div.jpg"
  },
  "DEPUTADO ESTADUAL|40555": {
    nome: "MARTA GONÇALVES",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536668_div.jpg"
  },
  "DEPUTADO ESTADUAL|40600": {
    nome: "TIN GOMES",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536674_div.jpg"
  },
  "DEPUTADO ESTADUAL|40700": {
    nome: "FABIOLA CARNEIRO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536666_div.jpg"
  },
  "DEPUTADO ESTADUAL|40774": {
    nome: "DENISE BRITO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536688_div.jpg"
  },
  "DEPUTADO ESTADUAL|40777": {
    nome: "ROMEU ALDIGUERI",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002545224_div.jpg"
  },
  "DEPUTADO ESTADUAL|40789": {
    nome: "PALOMA NUNES",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536692_div.jpg"
  },
  "DEPUTADO ESTADUAL|40840": {
    nome: "REGINALDO CORDEIRO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536672_div.jpg"
  },
  "DEPUTADO ESTADUAL|40888": {
    nome: "SÉRGIO AGUIAR",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536676_div.jpg"
  },
  "DEPUTADO ESTADUAL|40900": {
    nome: "NEGA DO HENRIQUE JORGE",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536689_div.jpg"
  },
  "DEPUTADO ESTADUAL|40999": {
    nome: "LEONARDO PINHEIRO",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002536683_div.jpg"
  },
  "DEPUTADO ESTADUAL|43000": {
    nome: "JOÃO JAIME",
    partido: "PV",
    foto: "assets/candidatos/FCE60002540725_div.jpg"
  },
  "DEPUTADO ESTADUAL|43123": {
    nome: "GIGI BARBOSA",
    partido: "PV",
    foto: "assets/candidatos/FCE60002554431_div.jpg"
  },
  "DEPUTADO ESTADUAL|43143": {
    nome: "GERSON AUGUSTO",
    partido: "PV",
    foto: "assets/candidatos/FCE60002540699_div.jpg"
  },
  "DEPUTADO ESTADUAL|43222": {
    nome: "KLEANTO DUARTE",
    partido: "PV",
    foto: "assets/candidatos/FCE60002540721_div.jpg"
  },
  "DEPUTADO ESTADUAL|43333": {
    nome: "DRA PRISCILLA",
    partido: "PV",
    foto: "assets/candidatos/FCE60002540722_div.jpg"
  },
  "DEPUTADO ESTADUAL|43640": {
    nome: "WALTER CAVALCANTE",
    partido: "PV",
    foto: "assets/candidatos/FCE60002540702_div.jpg"
  },
  "DEPUTADO ESTADUAL|43777": {
    nome: "MANA LIDERANÇA",
    partido: "PV",
    foto: "assets/candidatos/FCE60002540701_div.jpg"
  },
  "DEPUTADO ESTADUAL|44000": {
    nome: "ABDIAS FILHO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536176_div.jpg"
  },
  "DEPUTADO ESTADUAL|44010": {
    nome: "PROFESSORA DÉBORA LEITE",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536181_div.jpg"
  },
  "DEPUTADO ESTADUAL|44011": {
    nome: "CANCÃO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536192_div.jpg"
  },
  "DEPUTADO ESTADUAL|44012": {
    nome: "SUBTENENTE MOURA",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536198_div.jpg"
  },
  "DEPUTADO ESTADUAL|44022": {
    nome: "JAMAL FORTE",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536185_div.jpg"
  },
  "DEPUTADO ESTADUAL|44045": {
    nome: "JANAYNA LIMA",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536183_div.jpg"
  },
  "DEPUTADO ESTADUAL|44077": {
    nome: "PROFESSORA IZAURA",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536169_div.jpg"
  },
  "DEPUTADO ESTADUAL|44090": {
    nome: "CABO GISLENE",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536191_div.jpg"
  },
  "DEPUTADO ESTADUAL|44100": {
    nome: "CHAGAS CANINDÉ",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536173_div.jpg"
  },
  "DEPUTADO ESTADUAL|44111": {
    nome: "JAMES BEL",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536195_div.jpg"
  },
  "DEPUTADO ESTADUAL|44123": {
    nome: "IRINEU SILVA",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536200_div.jpg"
  },
  "DEPUTADO ESTADUAL|44141": {
    nome: "AUGUSTINHO MOREIRA FILHO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536178_div.jpg"
  },
  "DEPUTADO ESTADUAL|44192": {
    nome: "HUGO SILVA DA SAÚDE",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536179_div.jpg"
  },
  "DEPUTADO ESTADUAL|44222": {
    nome: "BEBEL DO ICÓ",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536193_div.jpg"
  },
  "DEPUTADO ESTADUAL|44237": {
    nome: "FRANCISCA CABRAL",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536189_div.jpg"
  },
  "DEPUTADO ESTADUAL|44254": {
    nome: "LENE SILVA",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536182_div.jpg"
  },
  "DEPUTADO ESTADUAL|44321": {
    nome: "CREMOSINHO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536201_div.jpg"
  },
  "DEPUTADO ESTADUAL|44333": {
    nome: "SGT DANTAS",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536180_div.jpg"
  },
  "DEPUTADO ESTADUAL|44422": {
    nome: "DANIEL FONTINELE",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536206_div.jpg"
  },
  "DEPUTADO ESTADUAL|44444": {
    nome: "MOSES FILHO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536203_div.jpg"
  },
  "DEPUTADO ESTADUAL|44447": {
    nome: "ROSA NORONHA",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536197_div.jpg"
  },
  "DEPUTADO ESTADUAL|44455": {
    nome: "CIDA BEZERRA",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536209_div.jpg"
  },
  "DEPUTADO ESTADUAL|44456": {
    nome: "VALDIR MOTO PEÇAS",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536171_div.jpg"
  },
  "DEPUTADO ESTADUAL|44545": {
    nome: "REJANE HOLANDA",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536199_div.jpg"
  },
  "DEPUTADO ESTADUAL|44555": {
    nome: "RODRIGO MAMMUTE",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536184_div.jpg"
  },
  "DEPUTADO ESTADUAL|44774": {
    nome: "JD_CEARAOFICIAL",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536172_div.jpg"
  },
  "DEPUTADO ESTADUAL|44777": {
    nome: "DAVI SIMÃO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536174_div.jpg"
  },
  "DEPUTADO ESTADUAL|44789": {
    nome: "TIAGO LIMA",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536190_div.jpg"
  },
  "DEPUTADO ESTADUAL|44810": {
    nome: "IBERNON MONTEIRO",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536194_div.jpg"
  },
  "DEPUTADO ESTADUAL|44888": {
    nome: "CHICO JÚNIOR",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002536205_div.jpg"
  },
  "DEPUTADO ESTADUAL|45000": {
    nome: "JORGE PINHEIRO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541554_div.jpg"
  },
  "DEPUTADO ESTADUAL|45007": {
    nome: "AYRES NOGUEIRA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002540851_div.jpg"
  },
  "DEPUTADO ESTADUAL|45045": {
    nome: "MYRLA ASSUNÇÃO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541555_div.jpg"
  },
  "DEPUTADO ESTADUAL|45090": {
    nome: "P. QUEIROZ",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541548_div.jpg"
  },
  "DEPUTADO ESTADUAL|45100": {
    nome: "MANU ALVES",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541540_div.jpg"
  },
  "DEPUTADO ESTADUAL|45111": {
    nome: "ANTÔNIO HENRIQUE",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002540853_div.jpg"
  },
  "DEPUTADO ESTADUAL|45122": {
    nome: "AURELIO GONÇALVES",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541539_div.jpg"
  },
  "DEPUTADO ESTADUAL|45123": {
    nome: "EMILIA PESSOA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541558_div.jpg"
  },
  "DEPUTADO ESTADUAL|45125": {
    nome: "ANDREA ROSSATI",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541544_div.jpg"
  },
  "DEPUTADO ESTADUAL|45145": {
    nome: "TATY LIMA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541559_div.jpg"
  },
  "DEPUTADO ESTADUAL|45190": {
    nome: "SARGENTO REGINAURO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541557_div.jpg"
  },
  "DEPUTADO ESTADUAL|45200": {
    nome: "HENRIQUE MAURO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541550_div.jpg"
  },
  "DEPUTADO ESTADUAL|45222": {
    nome: "FELIPE VASQUES",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541543_div.jpg"
  },
  "DEPUTADO ESTADUAL|45333": {
    nome: "DR. JOSÉ LIBERALINO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541561_div.jpg"
  },
  "DEPUTADO ESTADUAL|45345": {
    nome: "GORETE SILVA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541534_div.jpg"
  },
  "DEPUTADO ESTADUAL|45411": {
    nome: "DR. JOÃO MOTA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541556_div.jpg"
  },
  "DEPUTADO ESTADUAL|45422": {
    nome: "JOÉLIO PEREIRA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541537_div.jpg"
  },
  "DEPUTADO ESTADUAL|45444": {
    nome: "LEANDRO SOUSA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541551_div.jpg"
  },
  "DEPUTADO ESTADUAL|45450": {
    nome: "ELIOMAR BARBOSA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541552_div.jpg"
  },
  "DEPUTADO ESTADUAL|45455": {
    nome: "EUVALDETE FERRO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541541_div.jpg"
  },
  "DEPUTADO ESTADUAL|45456": {
    nome: "DAVI BENEVIDES",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541536_div.jpg"
  },
  "DEPUTADO ESTADUAL|45555": {
    nome: "WLÁDIA HORTENCIO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002554341_div.jpg"
  },
  "DEPUTADO ESTADUAL|45575": {
    nome: "RAFAELA BARROZO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541545_div.jpg"
  },
  "DEPUTADO ESTADUAL|45622": {
    nome: "JAIRO JORGE",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541535_div.jpg"
  },
  "DEPUTADO ESTADUAL|45633": {
    nome: "DRA. ANDREA LANDIM",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002540852_div.jpg"
  },
  "DEPUTADO ESTADUAL|45645": {
    nome: "JOÃO BARROSO FILHO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541533_div.jpg"
  },
  "DEPUTADO ESTADUAL|45678": {
    nome: "CLÁUDIO PINHO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541542_div.jpg"
  },
  "DEPUTADO ESTADUAL|45689": {
    nome: "CHRISTINA MACHADO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541549_div.jpg"
  },
  "DEPUTADO ESTADUAL|45777": {
    nome: "QUEIROZ FILHO",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541547_div.jpg"
  },
  "DEPUTADO ESTADUAL|45789": {
    nome: "CHICO BALTAZAR",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541560_div.jpg"
  },
  "DEPUTADO ESTADUAL|45800": {
    nome: "FELIPE MOTA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541538_div.jpg"
  },
  "DEPUTADO ESTADUAL|45888": {
    nome: "HEITOR FERRER",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541553_div.jpg"
  },
  "DEPUTADO ESTADUAL|45999": {
    nome: "TADEU OLIVEIRA",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002541546_div.jpg"
  },
  "DEPUTADO ESTADUAL|50000": {
    nome: "DOUTOR DAMASCENO",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538347_div.jpg"
  },
  "DEPUTADO ESTADUAL|50007": {
    nome: "PROF. FABIANO",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538352_div.jpg"
  },
  "DEPUTADO ESTADUAL|50009": {
    nome: "PIPOCA",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538350_div.jpg"
  },
  "DEPUTADO ESTADUAL|50013": {
    nome: "LEO SURICATE",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538353_div.jpg"
  },
  "DEPUTADO ESTADUAL|50050": {
    nome: "JÚLIA RAQUEL",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538348_div.jpg"
  },
  "DEPUTADO ESTADUAL|50067": {
    nome: "CARLA RODRIGUES",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538639_div.jpg"
  },
  "DEPUTADO ESTADUAL|50100": {
    nome: "JERÔNIMO GONÇALVES",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538343_div.jpg"
  },
  "DEPUTADO ESTADUAL|50111": {
    nome: "CICERO LIMA",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538341_div.jpg"
  },
  "DEPUTADO ESTADUAL|50113": {
    nome: "NESTOR BEZERRA",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538344_div.jpg"
  },
  "DEPUTADO ESTADUAL|50123": {
    nome: "SANE",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538643_div.jpg"
  },
  "DEPUTADO ESTADUAL|50180": {
    nome: "PROFESSORA ZULEIDE",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538635_div.jpg"
  },
  "DEPUTADO ESTADUAL|50333": {
    nome: "ADÃO FERNANDES",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538644_div.jpg"
  },
  "DEPUTADO ESTADUAL|50420": {
    nome: "KILDARY FREITAS",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538640_div.jpg"
  },
  "DEPUTADO ESTADUAL|50500": {
    nome: "AILTON LOPES",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538645_div.jpg"
  },
  "DEPUTADO ESTADUAL|50555": {
    nome: "GABRIEL BIOLOGIA",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538634_div.jpg"
  },
  "DEPUTADO ESTADUAL|50777": {
    nome: "GLAUCIA LINHARES",
    partido: "PSOL",
    foto: "assets/candidatos/FCE60002538349_div.jpg"
  },
  "DEPUTADO ESTADUAL|55000": {
    nome: "LORENA PINHEIRO",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537655_div.jpg"
  },
  "DEPUTADO ESTADUAL|55001": {
    nome: "ROSINHA DO DIVAS",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537660_div.jpg"
  },
  "DEPUTADO ESTADUAL|55011": {
    nome: "APOLLO VICZ",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537675_div.jpg"
  },
  "DEPUTADO ESTADUAL|55023": {
    nome: "TIAGO",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537656_div.jpg"
  },
  "DEPUTADO ESTADUAL|55024": {
    nome: "SEU SÉRGIO",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537673_div.jpg"
  },
  "DEPUTADO ESTADUAL|55055": {
    nome: "MANUH SILVA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537662_div.jpg"
  },
  "DEPUTADO ESTADUAL|55100": {
    nome: "VINICIUS DUARTE",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537668_div.jpg"
  },
  "DEPUTADO ESTADUAL|55111": {
    nome: "ERICH DOUGLAS",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537659_div.jpg"
  },
  "DEPUTADO ESTADUAL|55123": {
    nome: "MAGNOLIA ARAGÃO",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537672_div.jpg"
  },
  "DEPUTADO ESTADUAL|55125": {
    nome: "RUBEM NETO",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537664_div.jpg"
  },
  "DEPUTADO ESTADUAL|55223": {
    nome: "JACARÉ DO REPENTE",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537674_div.jpg"
  },
  "DEPUTADO ESTADUAL|55234": {
    nome: "VANIA CASTELO",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537661_div.jpg"
  },
  "DEPUTADO ESTADUAL|55249": {
    nome: "DULCI VIEIRA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537667_div.jpg"
  },
  "DEPUTADO ESTADUAL|55333": {
    nome: "SIMÃO PEDRO",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537671_div.jpg"
  },
  "DEPUTADO ESTADUAL|55455": {
    nome: "WELKERSON BEZERRA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537665_div.jpg"
  },
  "DEPUTADO ESTADUAL|55513": {
    nome: "WERUSKA AGUIAR",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537658_div.jpg"
  },
  "DEPUTADO ESTADUAL|55555": {
    nome: "DOMINGOS FILHO",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537663_div.jpg"
  },
  "DEPUTADO ESTADUAL|55678": {
    nome: "ELIZIANE LUCENA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537657_div.jpg"
  },
  "DEPUTADO ESTADUAL|55777": {
    nome: "TONY BRITO",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537666_div.jpg"
  },
  "DEPUTADO ESTADUAL|55888": {
    nome: "FIRMO CAMURÇA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537669_div.jpg"
  },
  "DEPUTADO ESTADUAL|55999": {
    nome: "BECHARA",
    partido: "PSD",
    foto: "assets/candidatos/FCE60002537670_div.jpg"
  },
  "DEPUTADO ESTADUAL|65013": {
    nome: "DRA. TAIS MATOS",
    partido: "PCDOB",
    foto: "assets/candidatos/FCE60002540706_div.jpg"
  },
  "DEPUTADO ESTADUAL|65123": {
    nome: "GILCELIO PAIVA",
    partido: "PCDOB",
    foto: "assets/candidatos/FCE60002540696_div.jpg"
  },
  "DEPUTADO ESTADUAL|65656": {
    nome: "PROF. SAMUEL SIEBRA",
    partido: "PCDOB",
    foto: "assets/candidatos/FCE60002540697_div.jpg"
  },
  "DEPUTADO ESTADUAL|77000": {
    nome: "BALACÓ FARIAS",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532461_div.jpg"
  },
  "DEPUTADO ESTADUAL|77019": {
    nome: "PROF. EDILANY SOUZA",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532471_div.jpg"
  },
  "DEPUTADO ESTADUAL|77077": {
    nome: "KENNEDY PASSOS",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532452_div.jpg"
  },
  "DEPUTADO ESTADUAL|77100": {
    nome: "BETÂNIA",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532449_div.jpg"
  },
  "DEPUTADO ESTADUAL|77111": {
    nome: "PROF. FRANCISCO GONÇALVES",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532458_div.jpg"
  },
  "DEPUTADO ESTADUAL|77123": {
    nome: "GEORGIA DO MARCELÃO",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532467_div.jpg"
  },
  "DEPUTADO ESTADUAL|77192": {
    nome: "FÁBIO DO CORAÇÃO",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532454_div.jpg"
  },
  "DEPUTADO ESTADUAL|77444": {
    nome: "GEORGE LIMA",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002553998_div.jpg"
  },
  "DEPUTADO ESTADUAL|77555": {
    nome: "RAFAEL DO QUEIJO",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532457_div.jpg"
  },
  "DEPUTADO ESTADUAL|77589": {
    nome: "LÚCIA NORONHA",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532456_div.jpg"
  },
  "DEPUTADO ESTADUAL|77777": {
    nome: "FELIPE FONSECA",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532451_div.jpg"
  },
  "DEPUTADO ESTADUAL|77789": {
    nome: "INSPETOR EMILSON",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532450_div.jpg"
  },
  "DEPUTADO ESTADUAL|77888": {
    nome: "MARTINHA BRANDÃO",
    partido: "SOLIDARIEDADE",
    foto: "assets/candidatos/FCE60002532455_div.jpg"
  },
  "DEPUTADO ESTADUAL|80000": {
    nome: "OTÁVIO MIRANDA",
    partido: "UP",
    foto: "assets/candidatos/FCE60002536988_div.jpg"
  },
  "DEPUTADO ESTADUAL|80180": {
    nome: "DIANNE GLEBIA",
    partido: "UP",
    foto: "assets/candidatos/FCE60002536989_div.jpg"
  },
  "SENADOR - 1ª VAGA|162": {
    nome: "REGINALDO",
    partido: "PSTU",
    foto: "assets/candidatos/FCE60002550748_div.jpg"
  },
  "SENADOR - 2ª VAGA|162": {
    nome: "REGINALDO",
    partido: "PSTU",
    foto: "assets/candidatos/FCE60002550748_div.jpg"
  },
  "SENADOR - 1ª VAGA|180": {
    nome: "LUIZIANNE",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002542476_div.jpg"
  },
  "SENADOR - 2ª VAGA|180": {
    nome: "LUIZIANNE",
    partido: "REDE",
    foto: "assets/candidatos/FCE60002542476_div.jpg"
  },
  "SENADOR - 1ª VAGA|222": {
    nome: "ALCIDES FERNANDES",
    partido: "PL",
    foto: "assets/candidatos/FCE60002540754_div.jpg"
  },
  "SENADOR - 2ª VAGA|222": {
    nome: "ALCIDES FERNANDES",
    partido: "PL",
    foto: "assets/candidatos/FCE60002540754_div.jpg"
  },
  "SENADOR - 1ª VAGA|290": {
    nome: "LINO ALVES",
    partido: "PCO",
    foto: "assets/candidatos/FCE60002551397_div.jpg"
  },
  "SENADOR - 2ª VAGA|290": {
    nome: "LINO ALVES",
    partido: "PCO",
    foto: "assets/candidatos/FCE60002551397_div.jpg"
  },
  "SENADOR - 1ª VAGA|300": {
    nome: "GUILHERME THEOPHILO",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002539687_div.jpg"
  },
  "SENADOR - 2ª VAGA|300": {
    nome: "GUILHERME THEOPHILO",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002539687_div.jpg"
  },
  "SENADOR - 1ª VAGA|400": {
    nome: "CID GOMES",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002542479_div.jpg"
  },
  "SENADOR - 2ª VAGA|400": {
    nome: "CID GOMES",
    partido: "PSB",
    foto: "assets/candidatos/FCE60002542479_div.jpg"
  },
  "SENADOR - 1ª VAGA|445": {
    nome: "CAPITÃO WAGNER",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002540753_div.jpg"
  },
  "SENADOR - 2ª VAGA|445": {
    nome: "CAPITÃO WAGNER",
    partido: "UNIÃO",
    foto: "assets/candidatos/FCE60002540753_div.jpg"
  },
  "SENADOR - 1ª VAGA|800": {
    nome: "CATARINA MATOS",
    partido: "UP",
    foto: "assets/candidatos/FCE60002533959_div.jpg"
  },
  "SENADOR - 2ª VAGA|800": {
    nome: "CATARINA MATOS",
    partido: "UP",
    foto: "assets/candidatos/FCE60002533959_div.jpg"
  },
  "GOVERNADOR|13": {
    nome: "ELMANO DE FREITAS",
    partido: "PT",
    foto: "assets/candidatos/FCE60002543969_div.jpg"
  },
  "GOVERNADOR|14": {
    nome: "DELEGADO HUGGO",
    partido: "MISSÃO",
    foto: "assets/candidatos/FCE60002540417_div.jpg"
  },
  "GOVERNADOR|16": {
    nome: "ZÉ BATISTA",
    partido: "PSTU",
    foto: "assets/candidatos/FCE60002549967_div.jpg"
  },
  "GOVERNADOR|29": {
    nome: "IERI BRAGA",
    partido: "PCO",
    foto: "assets/candidatos/FCE60002552320_div.jpg"
  },
  "GOVERNADOR|30": {
    nome: "VERA LÚCIA",
    partido: "NOVO",
    foto: "assets/candidatos/FCE60002553922_div.jpg"
  },
  "GOVERNADOR|35": {
    nome: "DANILO SOARES",
    partido: "DEMOCRATA",
    foto: "assets/candidatos/FCE60002552498_div.jpg"
  },
  "GOVERNADOR|45": {
    nome: "CIRO GOMES",
    partido: "PSDB",
    foto: "assets/candidatos/FCE60002531351_div.jpg"
  },
  "GOVERNADOR|80": {
    nome: "SERLEY LEAL",
    partido: "UP",
    foto: "assets/candidatos/FCE60002533729_div.jpg"
  },
  "PRESIDENTE|13": {
    nome: "LULA",
    partido: "PT",
    foto: "assets/candidatos/FBR280002542548_div.jpg"
  },
  "PRESIDENTE|14": {
    nome: "RENAN SANTOS",
    partido: "MISSÃO",
    foto: "assets/candidatos/FBR280002540694_div.jpg"
  },
  "PRESIDENTE|16": {
    nome: "HERTZ DIAS",
    partido: "PSTU",
    foto: "assets/candidatos/FBR280002541457_div.jpg"
  },
  "PRESIDENTE|21": {
    nome: "EDMILSON COSTA",
    partido: "PCB",
    foto: "assets/candidatos/FBR280002551975_div.jpg"
  },
  "PRESIDENTE|22": {
    nome: "FLAVIO BOLSONARO",
    partido: "PL",
    foto: "assets/candidatos/FBR280002551544_div.jpg"
  },
  "PRESIDENTE|27": {
    nome: "CLARIANA BARAO",
    partido: "DC",
    foto: "assets/candidatos/FBR280002552484_div.jpg"
  },
  "PRESIDENTE|28": {
    nome: "LEONARDO AVALANCHE",
    partido: "PRTB",
    foto: "assets/candidatos/FBR280002554479_div.jpg"
  },
  "PRESIDENTE|29": {
    nome: "RUI COSTA PIMENTA",
    partido: "PCO",
    foto: "assets/candidatos/FBR280002552487_div.jpg"
  },
  "PRESIDENTE|30": {
    nome: "ZEMA",
    partido: "NOVO",
    foto: "assets/candidatos/FBR280002539826_div.jpg"
  },
  "PRESIDENTE|35": {
    nome: "VETERINÁRIO WILSON GRASSI",
    partido: "DEMOCRATA",
    foto: "assets/candidatos/FBR280002548139_div.jpg"
  },
  "PRESIDENTE|55": {
    nome: "RONALDO CAIADO",
    partido: "PSD",
    foto: "assets/candidatos/FBR280002551932_div.jpg"
  },
  "PRESIDENTE|70": {
    nome: "ESCRITOR AUGUSTO CURY",
    partido: "AVANTE",
    foto: "assets/candidatos/FBR280002551547_div.jpg"
  },
  "PRESIDENTE|80": {
    nome: "SAMARA",
    partido: "UP",
    foto: "assets/candidatos/FBR280002538811_div.jpg"
  },
};

const BASE_CANDIDATOS_PRONTA = true;


/* =========================================================
   ESTADO DO SIMULADOR
========================================================= */

let etapaAtual = 0;
let numeroDigitado = "";
let votoBranco = false;
let votacaoFinalizada = false;


/* =========================================================
   ELEMENTOS DA TELA
========================================================= */

const cargoElemento =
  document.getElementById("cargo");

const numeroVotoElemento =
  document.getElementById("numero-voto");

const dadosCandidatoElemento =
  document.getElementById("dados-candidato");

const nomeCandidatoElemento =
  document.getElementById("nome-candidato");

const partidoCandidatoElemento =
  document.getElementById("partido-candidato");

const mensagemVotoElemento =
  document.getElementById("mensagem-voto");

const areaFotoElemento =
  document.getElementById("area-foto");

const fotoCandidatoElemento =
  document.getElementById("foto-candidato");

const legendaFotoElemento =
  document.getElementById("legenda-foto");

const telaVotacao =
  document.getElementById("tela-votacao");

const telaFim =
  document.getElementById("tela-fim");

const botaoNovaSimulacao =
  document.getElementById("btn-nova-simulacao");

const botaoBranco =
  document.getElementById("btn-branco");

const botaoCorrige =
  document.getElementById("btn-corrige");

const botaoConfirma =
  document.getElementById("btn-confirma");

const teclasNumericas =
  document.querySelectorAll(".tecla-numero");


/* =========================================================
   ÁUDIOS REAIS
========================================================= */

const audioTecla =
  document.getElementById("audio-tecla");

const audioConfirma =
  document.getElementById("audio-confirma");

const audioFim =
  document.getElementById("audio-fim");


function tocarAudio(audio) {

  if (!audio) {
    return;
  }

  try {

    audio.pause();
    audio.currentTime = 0;

    const reproducao =
      audio.play();

    if (
      reproducao &&
      typeof reproducao.catch === "function"
    ) {

      reproducao.catch(() => {});

    }

  }

  catch (erro) {

    console.log(
      "Não foi possível reproduzir o áudio:",
      erro
    );

  }

}


function somConfirmacao() {

  tocarAudio(
    audioConfirma
  );

}


function somFinal() {

  tocarAudio(
    audioFim
  );

}


/* =========================================================
   CHAVE DO CANDIDATO
========================================================= */

function gerarChaveCandidato(
  cargo,
  numero
) {

  return `${cargo}|${numero}`;

}


/* =========================================================
   DESENHAR OS QUADRADOS DOS NÚMEROS
========================================================= */

function desenharDigitos() {

  numeroVotoElemento.innerHTML = "";


  const etapa =
    etapas[etapaAtual];


  for (
    let i = 0;
    i < etapa.digitos;
    i++
  ) {

    const caixa =
      document.createElement("div");

    caixa.classList.add("digito");


    if (numeroDigitado[i]) {

      caixa.textContent =
        numeroDigitado[i];

    }


    /*
      Faz piscar o próximo espaço
    */

    if (
      i === numeroDigitado.length &&
      numeroDigitado.length < etapa.digitos &&
      !votoBranco
    ) {

      caixa.classList.add("ativo");

    }


    numeroVotoElemento.appendChild(
      caixa
    );

  }

}


/* =========================================================
   ESCONDER DADOS DO CANDIDATO
========================================================= */

function esconderCandidato() {

  dadosCandidatoElemento
    .classList
    .add("oculto");

  areaFotoElemento
    .classList
    .add("oculto");


  nomeCandidatoElemento.textContent =
    "";

  partidoCandidatoElemento.textContent =
    "";

  fotoCandidatoElemento.src =
    "";

}


/* =========================================================
   VERIFICAR CANDIDATO
========================================================= */

function verificarCandidato() {

  const etapa =
    etapas[etapaAtual];


  if (
    numeroDigitado.length !==
    etapa.digitos
  ) {

    esconderCandidato();

    mensagemVotoElemento.textContent =
      "";

    return;

  }


  /*
    Enquanto a base oficial ainda não estiver inserida,
    apenas mostramos que o número foi completado.
  */

  if (!BASE_CANDIDATOS_PRONTA) {

    mensagemVotoElemento.textContent =
      "NÚMERO DIGITADO";

    return;

  }


  const chave =
    gerarChaveCandidato(
      etapa.cargo,
      numeroDigitado
    );


  const candidato =
    candidatos[chave];


  if (candidato) {

    mensagemVotoElemento.textContent =
      "";


    nomeCandidatoElemento.textContent =
      candidato.nome;


    partidoCandidatoElemento.textContent =
      candidato.partido;


    fotoCandidatoElemento.src =
      candidato.foto;


    legendaFotoElemento.textContent =
      etapa.cargo;


    dadosCandidatoElemento
      .classList
      .remove("oculto");


    areaFotoElemento
      .classList
      .remove("oculto");

  }

  else {

    esconderCandidato();

    mensagemVotoElemento.textContent =
      "VOTO NULO";

  }

}


/* =========================================================
   ATUALIZAR A TELA
========================================================= */

function atualizarTela() {

  if (votacaoFinalizada) {
    return;
  }


  const etapa =
    etapas[etapaAtual];


  cargoElemento.textContent =
    etapa.cargo;


  desenharDigitos();


  if (votoBranco) {

    esconderCandidato();

    mensagemVotoElemento.textContent =
      "VOTO EM BRANCO";

    return;

  }


  verificarCandidato();

}


/* =========================================================
   DIGITAR NÚMERO
========================================================= */

function digitarNumero(numero) {

  if (votacaoFinalizada) {
    return;
  }


  const etapa =
    etapas[etapaAtual];


  /*
    Se havia voto em branco e a pessoa digitar,
    o branco é cancelado.
  */

  if (votoBranco) {

    votoBranco =
      false;

    mensagemVotoElemento.textContent =
      "";

  }


  if (
    numeroDigitado.length >=
    etapa.digitos
  ) {

    return;

  }


  numeroDigitado +=
    numero;


  atualizarTela();

}


/* =========================================================
   VOTO EM BRANCO
========================================================= */

function votarBranco() {

  if (votacaoFinalizada) {
    return;
  }


  numeroDigitado =
    "";

  votoBranco =
    true;


  esconderCandidato();

  atualizarTela();

}


/* =========================================================
   CORRIGE
========================================================= */

function corrigirVoto() {

  if (votacaoFinalizada) {
    return;
  }


  numeroDigitado =
    "";

  votoBranco =
    false;


  mensagemVotoElemento.textContent =
    "";


  esconderCandidato();

  atualizarTela();

}


/* =========================================================
   CONFIRMAR
========================================================= */

function confirmarVoto() {

  if (votacaoFinalizada) {
    return;
  }


  const etapa =
    etapas[etapaAtual];


  /*
    Não deixa confirmar número incompleto.
  */

  if (
    !votoBranco &&
    numeroDigitado.length <
    etapa.digitos
  ) {

    return;

  }


  somConfirmacao();


  /*
    Pequeno atraso para dar sensação
    semelhante ao equipamento.
  */

  setTimeout(() => {

    etapaAtual++;

    numeroDigitado =
      "";

    votoBranco =
      false;


    esconderCandidato();


    mensagemVotoElemento.textContent =
      "";


    /*
      Se terminou todas as etapas
    */

    if (
      etapaAtual >=
      etapas.length
    ) {

      finalizarVotacao();

      return;

    }


    atualizarTela();

  }, 180);

}


/* =========================================================
   FINALIZAR
========================================================= */

function finalizarVotacao() {

  votacaoFinalizada =
    true;


  telaVotacao
    .classList
    .add("oculto");


  telaFim
    .classList
    .remove("oculto");


  /*
    Pequeno intervalo antes do som final
  */

  setTimeout(() => {

    somFinal();

  }, 150);

}


/* =========================================================
   NOVA SIMULAÇÃO
========================================================= */

function novaSimulacao() {

  etapaAtual =
    0;

  numeroDigitado =
    "";

  votoBranco =
    false;

  votacaoFinalizada =
    false;


  telaFim
    .classList
    .add("oculto");


  telaVotacao
    .classList
    .remove("oculto");


  esconderCandidato();

  mensagemVotoElemento.textContent =
    "";


  atualizarTela();

}


/* =========================================================
   CLIQUES DO TECLADO
========================================================= */

teclasNumericas.forEach(
  tecla => {

    tecla.addEventListener(
      "click",
      () => {
const numero =
          tecla.dataset.numero;

        digitarNumero(numero);

      }
    );

  }
);


botaoBranco.addEventListener(
  "click",
  () => {
votarBranco();

  }
);


botaoCorrige.addEventListener(
  "click",
  () => {
corrigirVoto();

  }
);


botaoConfirma.addEventListener(
  "click",
  () => {
confirmarVoto();

  }
);


botaoNovaSimulacao.addEventListener(
  "click",
  () => {
novaSimulacao();

  }
);


/* =========================================================
   TECLADO DO NOTEBOOK / COMPUTADOR
========================================================= */

document.addEventListener(
  "keydown",
  evento => {

    if (votacaoFinalizada) {

      if (evento.key === "Enter") {

        novaSimulacao();

      }

      return;

    }


    /*
      Números 0 a 9
    */

    if (
      evento.key >= "0" &&
      evento.key <= "9"
    ) {
digitarNumero(
        evento.key
      );

    }


    /*
      ENTER = CONFIRMA
    */

    if (
      evento.key === "Enter"
    ) {
confirmarVoto();

    }


    /*
      BACKSPACE / DELETE = CORRIGE
    */

    if (
      evento.key === "Backspace" ||
      evento.key === "Delete"
    ) {

      evento.preventDefault();
corrigirVoto();

    }


    /*
      LETRA B = BRANCO
    */

    if (
      evento.key.toLowerCase() === "b"
    ) {
votarBranco();

    }

  }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

atualizarTela();

/* =========================================================
   MODO OFFLINE
========================================================= */

if ("serviceWorker" in navigator) {

  window.addEventListener("load", () => {

    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => {
        console.log("Modo offline ativado.");
      })
      .catch((erro) => {
        console.error(
          "Erro ao ativar modo offline:",
          erro
        );
      });

  });

}