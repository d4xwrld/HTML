function order() {
  let type = document.getElementById("order-btn");
  let selectElement = document.getElementById("jenis");
  window.location.href = "Form.html";

  if (type === 1) {
    selectElement.value = "BurgerPRamlee";
  } else {
    selectElement.value = "NasiLemak";
  }
}
