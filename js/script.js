const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closebtn");
const menu = document.getElementById("nav");
const dropbtn = document.getElementsByClassName("dropbtn");
const modalClose = document.getElementsByClassName("mclosebtn");
const listContainer = document.getElementsByClassName("listcontainer")
const list = document.getElementById("list");

for(let i=0; i < dropbtn.length; i++) {
    dropbtn[i].addEventListener("click", function(){
        listContainer[i].style.display = "block";
        modalClose[i].style.display = "inline-block";
        list.className += ' slideOut'; //for mobile

        list.className += ' slideDown'; //for tablet

        if(list.classList.contains('slideIn')){
            list.classList.remove('slideIn');
        }

        if(list.classList.contains('slideUp')){
            list.classList.remove('slideUp');
        }

    })
}

for(let i=0; i< modalClose.length; i++){
    modalClose[i].addEventListener("click", function (){
        // listContainer[i].style.display = "none";
        modalClose[i].style.display = "none"
        list.className += ' slideIn'; //for mobile

        list.className += ' slideUp'; //for tablet

        if(list.classList.contains('slideOut')){
            list.classList.remove('slideOut')
        }
        if(list.classList.contains('slideDown')){
            list.classList.remove('slideDown')
        }

    })
}

hamburger.addEventListener("click", function () {
  if (!menu.classList.contains('block')) {
    menu.className += ' block';
    closeBtn.style.display = 'block';
  } else {
    menu.classList.remove('block');
    closeBtn.style.display = 'none';
    list.style.display = 'none';


  }
});
closeBtn.addEventListener("click", function () {
    menu.className = 'navbar'
    closeBtn.style.display = 'none'
    list.style.display = 'none';
});



