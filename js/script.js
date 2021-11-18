const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closebtn");
const menu = document.getElementById("nav");
const dropbtn = document.getElementsByClassName("dropbtn");
const modalClose = document.getElementsByClassName("mclosebtn");
const listContainer = document.getElementsByClassName("listcontainer")
const list = document.getElementById("list");

for(let i=0; i < dropbtn.length; i++) {
    dropbtn[i].addEventListener("click", function(){
        if(list.classList.contains('slideOut')){
            list.classList.remove('slideOut')
            list.classList.add('slideIn');
            listContainer[i].style.display = "none";

        }else{
            listContainer[i].style.display = "block";
            modalClose[i].style.display = "block";
            list.classList.add('slideOut');
            list.classList.remove('slideIn');
        }

    })
}

for(let i=0; i< modalClose.length; i++){
    modalClose[i].addEventListener("click", function (){
        modalClose[i].style.display = "none"
        list.classList.add('slideIn');
        list.classList.remove('slideOut');
        setTimeout(() => {
            list.style.display = "none";
        }, 400);
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



