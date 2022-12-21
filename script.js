const body = document.querySelector("body");
const hamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const sidebar = document.querySelector("#mySidenav");
const closeSidebar = document.querySelector("#closeSidebar");
const overlay = document.querySelector("#overlayId");

hamburger.addEventListener("click", function () {
  sidebar.style.width = "270px";
  body.style.backgroundColor = "hsl(233, 5%, 63%)";
  body.style.overflow = "hidden";
});

closeSidebar.addEventListener("click", function () {
  sidebar.style.width = "0px";
  body.style.backgroundColor = "hsl(36, 100%, 99%)";
  body.style.overflow = "visible";
});
