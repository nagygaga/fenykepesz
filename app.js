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
        img: "./img/orban1.png",
      },
      {
        code: "yellow",
        img: "./img/meszaros1.png",
      },
      {
        code: "orange",
        img: "./img/orban3.png",
      },
      {
        code: "green",
        img: "./img/meszaros3.png",
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
        img: "./img/orban2.png",
      },
      {
        code: "#8D0327",
        img: "./img/jmeszaros2.png",
      },
      {
        code: "#A66F2E",
        img: "./img/orban3.png",
      },
      {
        code: "#F2E1C3",
        img: "./img/meszaros3.png",
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
        img: "./img/orban3.png",
      },
      {
        code: "#a3b5b2",
        img: "./img/meszaros3.png",
      },
      {
        code: "#4d2768",
        img: "./img/orban4.png",
      },
      {
        code: "#a8acce",
        img: "./img/meszaros4.png",
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
        img: "./img/orban4.png",
      },
      {
        code: "#b7426a",
        img: "./img/meszaros4.png",
      },
      {
        code: "#327d8e",
        img: "./img/orban3.png",
      },
      {
        code: "#114060",
        img: "./img/meszaros3.png",
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
