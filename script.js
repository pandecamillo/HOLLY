let active = false;
function menu() {
  active = !active;
  document.getElementById("menu").src = active
    ? "icon/close.png"
    : "icon/menu.png";
  document.getElementById("navbar").style.display = active ? "block" : "none";
}

function goToAdherer(e) {
  e.preventDefault();
  location.href = "adherer.html";
}

function goToHome(e) {
  e.preventDefault();
  location.href = "index.html";
}
