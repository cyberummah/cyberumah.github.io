var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30,
    img = document.querySelector('.bg-img');

function animate() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    img.style.webkitTransform = translate;
    img.style.mozTransform = translate;
    img.style.transform = translate;

    window.requestAnimationFrame(animate);
}

window.addEventListener('mousemove', function (e) {
    var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; 
    lFollowY = (10 * lMouseY) / 100;
});

window.addEventListener('click', function (e) {
    var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; 
    lFollowY = (10 * lMouseY) / 100;
});

animate();



//  p-typed  --------------

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["قريبا", "قريبا", "قريبا" ,"قريبا" , "قريبا" , "قريبا" , "قريبا"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000; 
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

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
