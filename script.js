let active = false;
function menu() {
  active = !active;
  document.getElementById("menu").src = active
    ? "icon/close.png"
    : "icon/menu.png";
  document.getElementById("navbar").style.display = active ? "block" : "none";
}

function goToAdherer() {
  location.href = "adherer.html";
}
