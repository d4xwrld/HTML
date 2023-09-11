const BuyButton = document.getElementById("Buy");
const BackButton = document.getElementById("Back");
const buyButton = document.getElementById("buy");
const container = document.getElementById("container");

BuyButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

BackButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

buyButton.addEventListener("click", () => {
  if (container.classList.contains("right-panel-active")) {
    container.classList.remove("right-panel-active");
  } else {
    container.classList.add("right-panel-active");
  }
});
