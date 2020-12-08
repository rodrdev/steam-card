var jogo;
var jogos = [
  {
    capa: "/imagem/imagem0.jpg",
    titulo: "PROMOÇÃO DE FIM DE SEMANA",
    preco: 129.9,
    desconto: 60,
  },

  {
    capa: "/imagem/imagem1.jpg",
    titulo: "PROMOÇÃO DE FIM DE SEMANA",
    preco: 199.9,
    desconto: 50,
  },

  {
    capa: "/imagem/imagem2.jpg",
    titulo: "PROMOÇÃO DE FIM DE SEMANA",
    preco: 50.0,
    desconto: 30,
  },
];

function randomGame() {
  jogo = jogos[Math.floor(Math.random() * jogos.length)];
  document.getElementById("img").src = jogo.capa;
  document.getElementById("desconto").textContent = `-${jogo.desconto}%`;
  document.getElementById("valor1").textContent = `R$ ${jogo.preco}`;
  document.getElementById("valor2").textContent = `R$ ${(
    (jogo.desconto / 100) *
    jogo.preco
  ).toFixed(2)}`;
}
randomGame();

setInterval(function () {
  randomGame();
}, 5 * 1000);
