/* ===== MENU ===== */
function toggleMenu() {
  let menu = document.getElementById("submenu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

/* ===== POPUP ===== */
function showInfo(text) {
  document.getElementById("popup-text").innerText = text;
  document.getElementById("popup").style.display = "flex";
}

/* ===== CLOSE POPUP ===== */
function closePopup() {
  document.getElementById("popup").style.display = "none";
}