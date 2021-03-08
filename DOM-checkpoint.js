let heart = document.querySelectorAll(".like-btn");
let sup = document.querySelectorAll(".delete-btn");
let item = document.querySelectorAll(".item");
let plus = document.querySelectorAll(".plus-btn");
let minus = document.querySelectorAll(".minus-btn");
let items_prices = [549, 870, 349];
let total = document.querySelector(".total");

let price = document.querySelectorAll(".total-price");
let quantity = document.querySelectorAll(".input");

function like() {
  heart.forEach((e) => {
    return e.addEventListener("click", () => {
      if (e.classList.contains("liked")) {
        e.classList.remove("liked");
      } else {
        e.classList.add("liked");
      }
    });
  });
}
like(heart);

function deleted() {
  sup.forEach((e, i) => {
    return e.addEventListener("click", () => {
      item[i].remove();
      console.log(total.innerHTML);
      total.innerHTML =
        total.innerHTML - items_prices[i] * quantity[i].innerHTML;
      if (total.innerHTML <= 0) {
        total.innerHTML = 0;
      }
    });
  });
}
deleted(sup);

function prices() {
  plus.forEach((e, i) => {
    return e.addEventListener("click", () => {
      quantity[i].innerHTML = parseInt(quantity[i].innerHTML) + 1;
      total.innerHTML = parseInt(total.innerHTML) + items_prices[i];
    });
  });
  minus.forEach((e, i) => {
    return e.addEventListener("click", () => {
      quantity[i].innerHTML = parseInt(quantity[i].innerHTML) - 1;
      if (quantity[i].innerHTML <= 0) {
        quantity[i].innerHTML = 0;
      }
      total.innerHTML = parseInt(total.innerHTML) - items_prices[i];
      if (total.innerHTML <= 0) {
        total.innerHTML = 0;
      }
    });
  });
}
prices(plus, minus);
