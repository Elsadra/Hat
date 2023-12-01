let box_product = [
  { id: 1, model: "باراتا", img: "./Image/barata.png" },
  { id: 2, model: "پشت تور", img: "./Image/behind-the-net.png" },
  { id: 3, model: "بافتنی", img: "./Image/woven.png" },
  { id: 4, model: "بیسبال ", img: "./Image/baseball.png" },
];

let box_Proposal = [
  {
    id: 1,
    model: "باراتا",
    img: "./Image/barata01.png",
    desc: "جهت تمیزی کلاه فقط با آب سرد و مایع نرم کننده و با دست شسته شود",
    price: 180,
  },
  {
    id: 2,
    model: "باراتا",
    img: "./Image/barata02.png",
    desc: "جهت تمیزی کلاه فقط با آب سرد و مایع نرم کننده و با دست شسته شود",
    price: 180,
  },
  {
    id: 3,
    model: "باراتا",
    img: "./Image/barata03.png",
    desc: "جهت تمیزی کلاه فقط با آب سرد و مایع نرم کننده و با دست شسته شود",
    price: 180,
  },
  {
    id: 4,
    model: "باراتا",
    img: "./Image/barata04.png",
    desc: "جهت تمیزی کلاه فقط با آب سرد و مایع نرم کننده و با دست شسته شود",
    price: 180,
  },
  {
    id: 5,
    model: "بیسبال ",
    img: "./Image/baseball01.png",
    desc: "مدل: بیسبالی   جنس پارچه: کتان   کیفیت بسیار عالی   مناسب برای استفاده روزمره ، اسپرت و خاص   مناسب برای آقایان و بانوان ، جوانان و نوجوانان",
    price: 180,
  },
  {
    id: 6,
    model: "بیسبال ",
    img: "./Image/baseball02.png",
    desc: "مدل: بیسبالی   جنس پارچه: کتان   کیفیت بسیار عالی   مناسب برای استفاده روزمره ، اسپرت و خاص   مناسب برای آقایان و بانوان ، جوانان و نوجوانان",
    price: 180,
  },
  {
    id: 7,
    model: "بیسبال ",
    img: "./Image/baseball03.png",
    desc: "مدل: بیسبالی   جنس پارچه: کتان   کیفیت بسیار عالی   مناسب برای استفاده روزمره ، اسپرت و خاص   مناسب برای آقایان و بانوان ، جوانان و نوجوانان",
    price: 180,
  },
  {
    id: 8,
    model: "پشت تور",
    img: "./Image/behind-the-net01.png",
    desc: "جنس: کتان   مدل: پشت تور ( گورین )   کیفیت فوق العاده عالی ( های کپی درجه 1 )   مناسب برای استفاده روزمره و ورزشی   قسمت پشتی تور برای تهویه بهتر",
    price: 180,
  },
  {
    id: 9,
    model: "پشت تور",
    img: "./Image/behind-the-net02.png",
    desc: "جنس: کتان   مدل: پشت تور ( گورین )   کیفیت فوق العاده عالی ( های کپی درجه 1 )   مناسب برای استفاده روزمره و ورزشی   قسمت پشتی تور برای تهویه بهتر",
    price: 180,
  },
];

let aElem;
let containerBoxProduct = document.querySelector(".container-box-product");

box_product.forEach(function (item) {
  aElem = document.createElement("a");
  aElem.className = "link-box-product";
  aElem.innerHTML = `
  <div class="box-product">
  <div class="parent-img-box-product">
    <img
      class="img-box-product"
      src="${item.img}"
      width="100%"
      alt="hat"
    />
  </div>
  <p class="desc-box-product">${item.model}</p>
</div>
  `;
  containerBoxProduct.append(aElem);
});

let darkMode = document.querySelectorAll(".item-theme");
let posterHeader = document.querySelector(".poster-header");
let iconDarkModeMobile = document.querySelector(".icon-dark-mode-mobile");
let iconDarkMode = document.querySelector(".icon-dark-mode");
let nav = document.querySelector("nav");
let carousel = document.querySelector(".carousel");
let containerLoader = document.querySelector(".container-loader");

let date = new Date();
let hours = date.getHours();

let dark = false;
function lightDark() {
  if (!dark) {
    dark = true;
    document.documentElement.style.setProperty("--body-color", "#0e161a");
    document.documentElement.style.setProperty("--body-color2", "#131d22");
    document.documentElement.style.setProperty("--black", "#f3f4f6");
    document.documentElement.style.setProperty("--black2", "#f7f7fa");
    posterHeader.setAttribute(
      "style",
      "box-shadow: 9px 19px 32px var(--body-color2), -9px -9px 32px var(--body-color);"
    );
    nav.setAttribute(
      "style",
      "box-shadow: 0 0 60px var(--body-color2), -0 -0 60px var(--body-color);"
    );
    iconDarkModeMobile.className = "";
    iconDarkMode.className = "";
    iconDarkModeMobile.className = "bi bi-moon-stars-fill icon-dark-mode";
    iconDarkMode.className = "bi bi-moon-stars-fill icon-dark-mode";
  } else {
    dark = false;
    document.documentElement.style.setProperty("--body-color", "#f3f4f6");
    document.documentElement.style.setProperty("--body-color2", "#f7f7fa");
    document.documentElement.style.setProperty("--black", "#0e161a");
    document.documentElement.style.setProperty("--black2", "#131d22");
    posterHeader.setAttribute(
      "style",
      "box-shadow: 9px 19px 32px #b1b1b1, -9px -9px 32px #ffffff;"
    );
    nav.setAttribute(
      "style",
      "box-shadow: 0 0 60px #bababa, -0 -0 60px #ffffff;"
    );
    iconDarkModeMobile.className = "";
    iconDarkMode.className = "";
    iconDarkModeMobile.className = `
        <i class="bi bi-brightness-high-fill icon-dark-mode"></i>
    `;
    iconDarkMode.className = `
        <i class="bi bi-brightness-high-fill icon-dark-mode"></i>
    `;
  }
}

if (hours >= 18) {
  document.documentElement.style.setProperty("--body-color", "#17242a");
  document.documentElement.style.setProperty("--body-color2", "#131d22");
  document.documentElement.style.setProperty("--black", "#f3f4f6");
  document.documentElement.style.setProperty("--black2", "#f7f7fa");
  posterHeader.setAttribute(
    "style",
    "box-shadow: 9px 19px 32px var(--body-color2), -9px -9px 32px var(--body-color);"
  );
  nav.setAttribute(
    "style",
    "box-shadow: 0 0 60px var(--body-color2), -0 -0 60px var(--body-color);"
  );
  iconDarkModeMobile.className = "";
  iconDarkMode.className = "";
  iconDarkModeMobile.className = "bi bi-moon-stars-fill icon-dark-mode";
  iconDarkMode.className = "bi bi-moon-stars-fill icon-dark-mode";
  lightDark();
} else {
  document.documentElement.style.setProperty("--body-color", "#f3f4f6");
  document.documentElement.style.setProperty("--body-color2", "#f7f7fa");
  document.documentElement.style.setProperty("--black", "#17242a");
  document.documentElement.style.setProperty("--black2", "#131d22");
  posterHeader.setAttribute(
    "style",
    "box-shadow: 9px 19px 32px #b1b1b1, -9px -9px 32px #ffffff;"
  );
  nav.setAttribute(
    "style",
    "box-shadow: 0 0 60px #bababa, -0 -0 60px #ffffff;"
  );
  iconDarkModeMobile.className = "";
  iconDarkMode.className = "";
  iconDarkModeMobile.className = "bi bi-brightness-high-fill icon-dark-mode";
  iconDarkMode.className = "bi bi-brightness-high-fill icon-dark-mode";
  lightDark();
}

darkMode.forEach(function (event) {
  event.addEventListener("click", lightDark);
});

box_Proposal.forEach(function (Hat) {
  let cardElem = document.createElement("div");
  cardElem.className = "card";
  cardElem.innerHTML = `
  <div class="card-image">
    <img src="${Hat.img}" class="card-img">
  </div>
  <p class="card-title">${Hat.model}</p>
  <p class="card-body">${Hat.desc}</p>
  <p class="footer">
    <span class="by-name">${Hat.price} تومان </span>
  </p>
  `;
  carousel.append(cardElem);
});

window.addEventListener("load", function () {
  containerLoader.setAttribute("style", "opacity: 0; transition: .4s;");
  setTimeout(function(){
    containerLoader.setAttribute("style", "display: none;");
  },1000)
});
