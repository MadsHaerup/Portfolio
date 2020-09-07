$(function() {
  let menu = document.querySelector("#menu");

  $("#menu").click(function() {
    $("header").slideToggle(); //show / hide
    menu.classList.toggle("change"); //invoking class change
  });

  //selecting contact and invoking function ripples
  $(contact).ripples();

});
// ────────────────────────────────────────────────────────────────────────────────
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
// Toggle between dark & light mode───────────────────────────────────────────────

// Select the button
const btn = document.querySelector("#checkbox");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");
const label = document.querySelector(".check");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "light-theme.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "dark-theme.css";
    label.style.background = "#fff";

    // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "light-theme.css";
    label.style.background = "#20123a";

  }
});