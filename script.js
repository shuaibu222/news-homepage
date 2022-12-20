const hamburger = document.getElementById("btnHamburger");
console.log(hamburger);
const header = document.querySelector(".header");
console.log(header);

hamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});
