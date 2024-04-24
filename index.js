const products = [
  {
    index: 0,
    hit: true,
    new: true,
    imageSrc: "./img/roll1.svg",
    sharp: true,
    vegan: true,
    lactoseFree: true,
    title: "Гункан лосось",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 1,
    hit: false,
    new: true,
    imageSrc: "./img/roll2.svg",
    sharp: true,
    vegan: false,
    lactoseFree: false,
    title: "Гункан креветка",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 2,
    hit: true,
    new: false,
    imageSrc: "./img/roll3.svg",
    sharp: false,
    vegan: true,
    lactoseFree: true,
    title: "Нигири угорь",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 3,
    hit: false,
    new: false,
    imageSrc: "./img/roll4.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Нигири угорь",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 4,
    hit: false,
    new: false,
    imageSrc: "./img/roll5.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Гункан с тунцом и трюфелем",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 5,
    hit: false,
    new: false,
    imageSrc: "./img/roll6.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Гункан тунец спайси",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 6,
    hit: false,
    new: false,
    imageSrc: "./img/roll7.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Гункан угорь",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
  {
    index: 7,
    hit: false,
    new: false,
    imageSrc: "./img/roll8.svg",
    sharp: false,
    vegan: false,
    lactoseFree: false,
    title: "Нигири тунец",
    weight: "Вес: 40г",
    description:
      "Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло",
    price: 190,
    currency: "руб",
    basket: false,
    quantity: 1,
  },
];

function createProductCards() {
  for (let i = 0; i < products.length; i++) {
    const divCard = document.createElement("div");
    divCard.id = "card" + i;
    divCard.className = "card";
    divCard.innerHTML = `<div class="cardHeader" id="cardHeader${+i}">
                          <div class="divlabels" id="divlabels${i}"></div>
                          <img src="${products[i].imageSrc}">
                        </div>
                        <div class="cardMain" id="cardMain${+i}">
                          <div class="divIcons" id="divIcons${i}"></div>
                          <h2 class="prooductTitle">${products[i].title}</h2>
                          <span class="weightCard">${products[i].weight}</span>
                          <div class="descriptionCard">${
                            products[i].description
                          }</div>
                        </div>
                        <div class="footerCard" id="footerCard${i}">
                          <span class="priceCard">${
                            products[i].price + " " + products[i].currency
                          }</span>
                          <div class="likeBlock" id="likeBlock${i}"><img src="./img/likeImg.svg"></div>
                          <div class="addBlock" id="addBlock${i}"><img src='./img/addImg.svg'></div>
                        </div>`;
    document.getElementById("conteiner").appendChild(divCard);

    const divlabels = document.getElementById("divlabels" + i);

    if (products[i].hit == true) {
      divlabels.innerHTML += '<div class="hitBlock">Hit</div>';
    }
    if (products[i].new == true) {
      divlabels.innerHTML += '<div class="newBlock">New</div>';
    }

    const divIcons = document.getElementById("divIcons" + i);

    if (products[i].sharp == true) {
      divIcons.innerHTML += `<img src="./img/sharpIcon.svg">`;
    }
    if (products[i].vegan == true) {
      divIcons.innerHTML += `<img src="./img/veganIcon.svg">`;
    }
    if (products[i].lactoseFree == true) {
      divIcons.innerHTML += `<img src="./img/lactoseFreeIcon.svg">`;
    }
  }
}
createProductCards();

const basket = document.getElementById("basket");

const emptyBasketImg = document.getElementById("emptyBasketImg");
const emptyBasketH2 = document.getElementById("emptyBasketH2");
const emptyBasketSpan = document.getElementById("emptyBasketSpan");

const basketProducts = [];

let cardId;
let productIndex;
function removeEmptyBasket() {
  if (basketProducts.length > 0) {
    emptyBasketImg.style.display = "none";
    emptyBasketH2.style.display = "none";
    emptyBasketSpan.style.display = "none";
    basket.style.justifyContent = "start";
  } else {
    emptyBasketImg.style.display = "block";
    emptyBasketH2.style.display = "block";
    emptyBasketSpan.style.display = "block";
    basket.style.justifyContent = "center";
  }
}
function getTotalPrice() {
  const totalBasket = document.getElementById("totalBasket");
  const totalBasketPrice = document.getElementById("totalBasketPrice");
  if (basketProducts.length > 0) {
    totalBasket.style.display = "block";
    totalBasketPrice.style.display = "block";

    let totalPriceNum = 0;
    for (let i = 0; i < basketProducts.length; i++) {
      totalPriceNum += basketProducts[i].price * basketProducts[i].quantity;
    }
    totalBasketPrice.innerHTML = totalPriceNum + " " + products[0].currency;
  } else {
    totalBasket.style.display = "none";
    totalBasketPrice.style.display = "none";
  }
}

const cards = document.querySelectorAll(".card");
cards.forEach((elem) => {
  const cardBtn = elem.childNodes[4].childNodes[5];
  cardBtn.addEventListener("click", () => {
    cardId = cardBtn.id.substring(8, 9);
    if (!products[cardId].basket) {
      productIndex = basketProducts.length;
      basketProducts.push(products[cardId]);
      removeEmptyBasket();
      getTotalPrice();
    }
    createBasketCard();
  });
});

function createBasketCard() {
  for (let i = 0; i < basketProducts.length; i++) {
    if (!products[cardId].basket) {
      const basketCard = document.createElement("div");
      basketCard.className = "basketCard";
      basketCard.id = "basketCard" + productIndex;
      basketCard.innerHTML = `<div class="crossBlock" id="crossBlock${productIndex}">
                                <img src="./img/crossImg.svg" class="crossImg" id="crossBlock${productIndex}">
                              </div>
                              <img src="${
                                basketProducts[productIndex].imageSrc
                              }" class="basketCardImg" id="basketCardImg${
        basketProducts[productIndex].index
      }">
                              <div class"basketTitleBlock">
                                <div class"basketRollTitle">${
                                  basketProducts[productIndex].title
                                }</div>
                                <div class="basketRollWeight">${
                                  basketProducts[productIndex].weight
                                }</div>
                              </div>
                              <div class="basketPriceBlock">
                                <div class="basketRollPrice">${
                                  basketProducts[productIndex].price +
                                  " " +
                                  basketProducts[productIndex].currency
                                }</div>
                                <div class="minusQuantity" id="minusQuantity${productIndex}"><img src="./img/minusImg.svg" id="minusQuantity${productIndex}" class="minusImg"></div>
                                <div class="quantity" id="quantity${productIndex}">${
        basketProducts[productIndex].quantity
      }</div>
                                <div class="plusQuantity" id="plusQuantity${productIndex}"><img src="./img/plusImg.svg" id="plusQuantity${productIndex}" class="plusImg"></div>
                              </div>`;
      document.getElementById("basket").appendChild(basketCard);
      products[cardId].basket = true;
    }
  }
}
function UpdateIdBacket() {
  const allBasketCard = document.querySelectorAll(".basketCard");
  const allQuantity = document.querySelectorAll(".quantity");
  const allplusQuantity = document.querySelectorAll(".plusQuantity");
  const allplusImg = document.querySelectorAll(".plusImg");
  const allminusQuantity = document.querySelectorAll(".minusQuantity");
  const allminusImg = document.querySelectorAll(".minusImg");
  const allcrossBlock = document.querySelectorAll(".crossBlock");
  const allcrossImg = document.querySelectorAll(".crossImg");
  for (let i = 0; i < basketProducts.length; i++) {
    allBasketCard[i].id = "basketCard" + i;
    allQuantity[i].id = "quantity" + i;
    allplusQuantity[i].id = "plusQuantity" + i;
    allplusImg[i].id = "plusQuantity" + i;
    allminusQuantity[i].id = "minusQuantity" + i;
    allminusImg[i].id = "minusQuantity" + i;
    allcrossBlock[i].id = "crossBlock" + i;
    allcrossImg[i].id = "crossBlock" + i;
  }
}

document.getElementById("basket").addEventListener("click", (event) => {
  const id = event.srcElement.id.substring(12, 13);
  const quantity = document.getElementById("quantity" + id);
  if (
    event.target.classList.contains("plusQuantity") ||
    event.target.classList.contains("plusImg")
  ) {
    basketProducts[id].quantity++;
    quantity.innerHTML = basketProducts[id].quantity;
    getTotalPrice();
  }
});
document.getElementById("basket").addEventListener("click", (event) => {
  const id2 = event.srcElement.id.substring(13, 14);
  const quantity = document.getElementById("quantity" + id2);
  if (
    event.target.classList.contains("minusQuantity") ||
    event.target.classList.contains("minusImg")
  ) {
    if (basketProducts[id2].quantity > 1) {
      basketProducts[id2].quantity--;
      quantity.innerHTML = basketProducts[id2].quantity;
      getTotalPrice();
    }
  }
});

document.getElementById("basket").addEventListener("click", (event) => {
  if (
    event.target.classList.contains("crossBlock") ||
    event.target.classList.contains("crossImg")
  ) {
    const id3 = event.srcElement.id.substring(10, 11);
    const basketCard = document.getElementById("basketCard" + id3);
    const basketCardImgId = document.querySelectorAll(".basketCardImg");
    products[basketCardImgId[id3].id.substring(13, 14)].basket = false;
    products[basketCardImgId[id3].id.substring(13, 14)].quantity = 1;
    basketProducts.splice(id3, 1);
    basket.removeChild(basketCard);
    UpdateIdBacket();
    removeEmptyBasket();
    getTotalPrice();
  }
});
