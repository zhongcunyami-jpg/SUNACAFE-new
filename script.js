/* =====================================================
   ハンバーガーメニュー
===================================================== */

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

/* =====================================================
   メニューを押したら閉じる
===================================================== */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (hamburger && nav) {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    }
  });
});

/* =====================================================
   スクロールアニメーション
===================================================== */

const fadeItems = document.querySelectorAll(".fade-in");

function showFadeItems() {
  fadeItems.forEach(function (item) {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showFadeItems);
showFadeItems();

/* =====================================================
   人気メニューをランダム表示
===================================================== */

/*
  今のブルーボトル風HTMLでは
  親要素が .product-grid になっています。

  もし昔のHTMLで .menu-grid を使っていても動くように、
  両方に対応しています。
*/
const menuGrid =
  document.querySelector(".product-grid") ||
  document.querySelector(".menu-grid");

/*
  人気メニューのカードを取得します。

  今のHTMLでは
  class="product-card menu-card"
  になっているので、.menu-card で取得できます。
*/
if (menuGrid) {
  const menuCards = Array.from(
    menuGrid.querySelectorAll(".menu-card")
  );

  for (let i = menuCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [menuCards[i], menuCards[j]] =
      [menuCards[j], menuCards[i]];
  }

  menuCards.forEach(function (card) {
    menuGrid.appendChild(card);
  });
}