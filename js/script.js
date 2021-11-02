const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("nav");

hamburger.addEventListener("click", function () {
  if (!menu.classList.contains('hamburger')) {
    menu.className += ' hamburger';
    closeBtn.style.display = 'block';
  } else {
    menu.classList.remove('hamburger');
    closeBtn.style.display = 'none';
  }
});

closeBtn.addEventListener("click", function () {
    menu.className = 'navbar'
    closeBtn.style.display = 'none'
});