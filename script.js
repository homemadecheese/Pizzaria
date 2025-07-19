const pizzasSalgadas = [
  {
    nome: "Calabresa",
    desc: "Calabresa, cebola, orégano",
    preco: "R$ 39,90",
    img: "imagens/Calabresa.jpg"
  },
  {
    nome: "Portuguesa",
    desc: "Presunto, ovo, cebola, ervilha",
    preco: "R$ 46,90",
    img: "imagens/Portuguesa.jpg"
  },
  {
    nome: "Frango c/ Catupiry",
    desc: "Frango, catupiry e milho",
    preco: "R$ 45,00",
    img: "imagens/Frango.webp"
  },
  {
    nome: "Quatro Queijos",
    desc: "Muçarela, gorgonzola, parmesão, catupiry",
    preco: "R$ 49,90",
    img: "imagens/Quatro.avif"
  },
  {
    nome: "Marguerita",
    desc: "Tomate, muçarela e manjericão",
    preco: "R$ 42,00",
    img: "imagens/Marguerita.jpg"
  }
];

const pizzasDoces = [
  {
    nome: "Romeu e Julieta",
    desc: "Muçarela com goiabada",
    preco: "R$ 35,00",
    img: "imagens/Romeu.jpg"
  },
  {
    nome: "Chocolate",
    desc: "Chocolate ao leite e granulado",
    preco: "R$ 37,00",
    img: "imagens/Chocolate.webp"
  },
  {
    nome: "Prestígio",
    desc: "Chocolate, coco e leite condensado",
    preco: "R$ 39,00",
    img: "imagens.zip/Prestigio.jpg"
  }
];

const bebidas = [
  {
    nome: "Coca-Cola 2L",
    desc: "Clássica geladinha",
    preco: "R$ 10,00",
    img: "imagens/coca.webp"
  },
  {
    nome: "Guaraná Antarctica 2L",
    desc: "Sabor brasileiro",
    preco: "R$ 9,50",
    img: "imagens/guarana.png"
  },
  {
    nome: "Suco de Laranja 1L",
    desc: "Natural e refrescante",
    preco: "R$ 8,00",
    img: "imagens/Suco.jpg"
  }
];

function criarCard(item) {
  return `
    <div class="card">
      <img src="${item.img}" alt="${item.nome}">
      <div class="card-content">
        <h3>${item.nome}</h3>
        <p>${item.desc}</p>
        <span class="preco">${item.preco}</span>
      </div>
    </div>
  `;
}

document.getElementById("salgadas").innerHTML = pizzasSalgadas.map(criarCard).join("");
document.getElementById("doces").innerHTML = pizzasDoces.map(criarCard).join("");
document.getElementById("bebidas").innerHTML = bebidas.map(criarCard).join("");


