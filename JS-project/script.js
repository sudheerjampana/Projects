let menuBar = document.getElementById("menu-bar");
let crossMenu = document.getElementById("cross-menu");
let navContent = document.getElementsByClassName("nav-content")[0];

menuBar.onclick = () => {
  menuBar.style.display = "none";
  crossMenu.style.display = "inline-block";
  navContent.classList.add("active");
};

crossMenu.onclick = () => {
  menuBar.style.display = "inline-block";
  crossMenu.style.display = "none";
  navContent.classList.remove("active");
};

