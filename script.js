const pizzasSalgadas = [
  {
    nome: "Calabresa",
    desc: "Calabresa, cebola, orégano",
    preco: "R$ 39,90",
    img: "imagens.zip/Calabresa.jpg"
  },
  {
    nome: "Portuguesa",
    desc: "Presunto, ovo, cebola, ervilha",
    preco: "R$ 46,90",
    img: "imagens.zip/Portuguesa.jpg"
  },
  {
    nome: "Frango c/ Catupiry",
    desc: "Frango, catupiry e milho",
    preco: "R$ 45,00",
    img: "imagens.zip/Frango.webp"
  },
  {
    nome: "Quatro Queijos",
    desc: "Muçarela, gorgonzola, parmesão, catupiry",
    preco: "R$ 49,90",
    img: "imagens.zip/Quatro.avif"
  },
  {
    nome: "Marguerita",
    desc: "Tomate, muçarela e manjericão",
    preco: "R$ 42,00",
    img: "imagens.zip/Marguerita.jpg"
  }
];

const pizzasDoces = [
  {
    nome: "Romeu e Julieta",
    desc: "Muçarela com goiabada",
    preco: "R$ 35,00",
    img: "imagens.zip/Romeu.jpg"
  },
  {
    nome: "Chocolate",
    desc: "Chocolate ao leite e granulado",
    preco: "R$ 37,00",
    img: "imagens.zip/Chocolate.webp"
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
    img: "imagens.zip/coca.webp"
  },
  {
    nome: "Guaraná Antarctica 2L",
    desc: "Sabor brasileiro",
    preco: "R$ 9,50",
    img: "imagens.zip/guarana.webp"
  },
  {
    nome: "Suco de Laranja 1L",
    desc: "Natural e refrescante",
    preco: "R$ 8,00",
    img: "imagens.zip/Suco.jpg"
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


