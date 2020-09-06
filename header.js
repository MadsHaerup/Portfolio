$(function() {
  let menu = document.querySelector("#burgerMenu");
  $("#burgerMenu").click(function() {
    //Id #burger med funktion click
    $("header").slideToggle(); //skal vise eller skjule nav ul når #burger bliver klikket
    menu.classList.toggle("change"); //kalder classes der starter med change
  });

});

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;
  if (
    header.offsetTop <= fromTop
  ) {
    header.classList.add("current");
  } else {
    header.classList.remove("current");
  }

});