"use strict"
const items = navObj.jsonItems;
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closebtn");
const menu = document.getElementById("nav");

const modalClose = document.getElementsByClassName("mclosebtn");
const listContainer = document.getElementsByClassName("listcontainer")
const list = document.getElementById("list");
const navContainerId = document.getElementById("nav-container-id");
const timeoutSpeed = 300;

loadNavItems(items);
initDropdownItems();


hamburger.addEventListener("click", function () {
    if (!menu.classList.contains('block')) {
        menu.className += ' block';
        closeBtn.style.display = 'block';
    } else {
        menu.classList.remove('block');
        closeBtn.style.display = 'none';
        list.style.display = 'none';
        navContainerId.classList.remove('blur');


    }
});
closeBtn.addEventListener("click", function () {
    menu.className = 'navbar'
    // closeBtn.classList.remove('hidden');
    closeBtn.style.display = 'none';
    list.style.display = 'none';
});

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener("click", function () {
        modalClose[i].style.display = "none"
        list.classList.add('slideIn');
        list.classList.remove('slideOut');
        closeBtn.classList.add('hidden');
        const dropList = document.getElementsByClassName("droplist");
        for(let j=0; j < dropList.length; j++){
            if(dropList[j].classList.contains("droplist")){
                dropList[j].style.display = "none";
            }
        }
        setTimeout(() => {
            list.style.display = "none";
            navContainerId.classList.remove('blur');
        }, timeoutSpeed);
    })
}


function loadNavItems(items) {
    const navMenu = document.getElementById("nav");

    for(let i=0; i<items.length; i++){
        const listTag = document.createElement('li');
        const aTag = document.createElement('a');
        aTag.innerHTML = items[i].navTitle
        aTag.className = items[i].class
        aTag.href = items[i].href
        listTag.appendChild(aTag);

        navMenu.appendChild(listTag);

        if(items[i].dropdown) {
            //create the ul container if dropdowns is true
            //add class etc
            const ulTag = document.createElement('ul');
            ulTag.className = "droplist";
            ulTag.classList.add([i]);
            ulTag.style.display = "none";
            console.log(items[i].dropdownItems);


            const dropdownItems = items[i].dropdownItems;

            dropdownItems.forEach((item, index) => {
                const listTag2 = document.createElement('li');
                const aTag2 = document.createElement('a');
                aTag2.innerHTML = item.title;
                aTag2.href = item.href;
                listTag2.appendChild(aTag2);
                ulTag.appendChild(listTag2);
                list.appendChild(ulTag);
                //append to newly cvreated ul here
            })


        }

    }


}

function initDropdownItems() {
    // bind dropdown list items
    const dropbtn = document.getElementsByClassName("dropbtn");
    const dropList = document.getElementsByClassName("droplist");
    const closeModal = document.getElementById("mclosebtn");

    for (let i = 0; i < dropbtn.length; i++) {
        dropbtn[i].addEventListener("click", function () {
            if (list.classList.contains('slideOut')) {
                list.classList.remove('slideOut')
                list.classList.add('slideIn');
                list.style.display = "none";
                dropList[i].style.display = "none";
                closeBtn.style.display = "none";

            } else {
                list.style.display = "block";
                dropList[i].style.display = "block";
                closeModal.style.display = "block";
                list.classList.add('slideOut');
                list.classList.remove('slideIn');
                navContainerId.classList.add('blur');
            }
        })

    }

}





