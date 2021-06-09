// navbar
function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}
// typing name
let i = 0,
  myname;
myname = "Abdul-Malik.";

function typing() {
  if (i < myname.length) {
    document.getElementById("typed-head").innerHTML += myname.charAt(i);
    i++;
    setTimeout(typing, 90);
  }
}
typing();

// typing text
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "an Aspiring Full Stack Developer.",
  "Based in Cape Town, South Africa.",
  "Excited to meet YOU!",
];
const typingDelay = 100;
const erasingDelay = 20;
const newTextDelay = 900;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}
window.addEventListener("load", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
