const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("nav");
const modal = document.getElementById("myModal")
const modalBtn = document.getElementById("dropbtn-modal-id");
const modalClose = document.getElementById("m-close-btn");


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

modalBtn.addEventListener("click", function(){
    modal.style.display = "inline-block";
})

modalClose.addEventListener("click", function(){
        modal.style.display = 'none';
})
