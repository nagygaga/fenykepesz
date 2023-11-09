const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SUMMER",
    price: 119,
    colors: [
      {
        code: "pink",
        img: "./img/nyar.jpg",
      },
      {
        code: "yellow",
        img: "./img/nyar1.jpg",
      },
      {
        code: "orange",
        img: "./img/nyar2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "AUTUMN",
    price: 149,
    colors: [
      {
        code: "#eb6b00",
        img: "./img/osz.jpg",
      },
      {
        code: "#8D0327",
        img: "./img/osz1.jpg",
      },
      {
        code: "#A66F2E",
        img: "./img/osz2.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "WINTER",
    price: 109,
    colors: [
      {
        code: "#40505a",
        img: "./img/tel.jpg",
      },
      {
        code: "#a3b5b2",
        img: "./img/tel1.jpg",
      },
      {
        code: "#4d2768",
        img: "./img/tel2.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "SPRING",
    price: 129,
    colors: [
      {
        code: "f0e9f0",
        img: "./img/tavasz.jpg",
      },
      {
        code: "#b7426a",
        img: "./img/tavasz1.jpg",
      },
      {
        code: "#327d8e",
        img: "./img/tavasz2.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
