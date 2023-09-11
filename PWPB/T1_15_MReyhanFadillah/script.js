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

harga1 = 0;
function updateHarga(menu) {
  if (document.order.menu.value == 0) {
    document.order.harga.value = null;
  }
  if (document.order.menu.value == 1) {
    var harga1 = 15000;
    document.order.harga.value = harga1;
  } else if (document.order.menu.value == 2) {
    var harga2 = 20000;
    document.order.harga.value = harga2;
  }
}
var porsiInput = document.getElementById("porsi");
porsiInput.addEventListener("input", function () {
  if (document.order.porsi.value > 0) {
    var total = document.order.harga.value * document.order.porsi.value;
    document.order.bayar.value = total;
  } else {
    document.order.bayar.value = "";
  }
});

function success() {
  alert("Pesanan Berhasil!");
}
