'use strict'
const items = navObj.jsonItems;
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closebtn');
const menu = document.getElementById('nav');
const box = document.getElementById('box');
const modalClose = document.getElementsByClassName('mclosebtn');
const listContainer = document.getElementsByClassName('listcontainer');
const blurOverlay = document.getElementById('blur');
const timeoutSpeed = 700;

loadNavItems(items);


hamburger.addEventListener('click', function () {
    if (!box.classList.contains('block')) {
        box.classList.add('block');
        closeBtn.classList.add('block');
    } else {
        box.classList.remove('block');
        closeBtn.classList.remove('block');
    }
});
closeBtn.addEventListener('click', function () {
    for (let i = 0; i < listContainer.length; i++) {
        listContainer[i].classList.remove('block');
    }
    box.classList.remove('block');
    closeBtn.classList.remove('block');


});

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function () {
        listContainer[i].classList.add('slideIn');
        listContainer[i].classList.remove('slideOut');
        closeBtn.classList.add('block');


        setTimeout(() => {
            hamburger.classList.remove('blur');
            menu.classList.remove('blur');
            listContainer[i].classList.remove('block');
        }, timeoutSpeed);
    })
}


function loadNavItems(items) {
    const navMenu = document.getElementById('nav');

    for (let i = 0; i < items.length; i++) {
        const navListTag = document.createElement('li');
        const aTagNav = document.createElement('a');
        aTagNav.innerHTML = items[i].navTitle
        aTagNav.className = items[i].class
        aTagNav.href = items[i].href
        navListTag.className = 'navItem';
        navListTag.appendChild(aTagNav);

        if (items[i].dropdown) {
            //create the ul container if dropdowns is true
            //add class etc
            const ulTag = document.createElement('ul');
            ulTag.className = 'droplist';

            const dropdownItems = items[i].dropdownItems;

            dropdownItems.forEach((item, index) => {
                const divTagDrop = document.createElement('div');
                const listTagDrop = document.createElement('li');
                const aTagDrop = document.createElement('a');


                aTagDrop.innerHTML = item.title;
                aTagDrop.href = item.href;
                listTagDrop.appendChild(aTagDrop);
                ulTag.appendChild(listTagDrop);
                divTagDrop.appendChild(ulTag);

            })
            const divTag = document.createElement('div');
            const closeModal = document.createElement('span');
            const closeIcon = document.createElement('i');

            closeModal.classList.add('modal-close');
            closeIcon.classList.add('fas');
            closeIcon.classList.add('fa-arrow-left')
            closeIcon.classList.add('mclosebtn');

            closeModal.appendChild(closeIcon);
            divTag.classList.add('listcontainer');
            divTag.classList.add('dropdown-items');
            navListTag.appendChild(divTag);
            divTag.appendChild(ulTag);
            divTag.appendChild(closeModal)

        }
        navMenu.appendChild(navListTag);

    }
    initDropdownItems();
}

function initDropdownItems() {
    // bind dropdown list items
    const dropbtn = document.getElementsByClassName('dropbtn');
    const dropList = document.getElementsByClassName('droplist');
    const closeModal = document.getElementsByClassName('mclosebtn');

    for (let i = 0; i < dropbtn.length; i++) {
        dropbtn[i].addEventListener('click', function (e) {
            console.log(this);
            if (listContainer[i].classList.contains('slideOut')) {
                listContainer[i].classList.remove('slideOut');
                listContainer[i].classList.add('slideIn');
                // menu.classList.add('send-behind');
                setTimeout(() => {
                    listContainer[i].classList.remove('block');
                },701);
                dropList[i].classList.remove('block');
                closeBtn.classList.add('block');


            } else  {
                listContainer[i].classList.add('block');
                // menu.classList.add('send-behind');
              //  dropList[i].classList.add('block');
                closeModal[i].classList.add('block');
                closeBtn.classList.remove('block');
                console.log(listContainer);
                for (let j = 0; j < listContainer.length; j++){
                    if (j !== i) {
                        listContainer[j].classList.remove('slideOut');
                        listContainer[j].classList.add('slideIn');

                       setTimeout(() => {
                           listContainer[j].classList.remove('block');
                       },701);
                    }



                }
                listContainer[i].classList.add('slideOut');
                // others need to remove slide out
                // others need to add slide in


                listContainer[i].classList.remove('slideIn');

            }
            const matchMedia = window.matchMedia('(max-width: 639px)');
            if (matchMedia.matches) {
                lightBoxStyle();
            }
        })

    }

}

function lightBoxStyle() {
    menu.classList.add('blur');
    hamburger.classList.add('blur');
}





