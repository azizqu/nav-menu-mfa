'use strict'
const items = navObj.jsonItems;
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closebtn');
const menu = document.getElementById('nav');
const box = document.getElementById('box');
const modalClose = document.getElementsByClassName('mclosebtn');
const listContainer = document.getElementsByClassName('listcontainer')
//const list = document.getElementById('list');
const navContainerId = document.getElementById('nav-container-id');
const timeoutSpeed = 300;

loadNavItems(items);



hamburger.addEventListener('click', function () {
    if (!menu.classList.contains('block')) {
        menu.className += ' block';
        box.style.display = 'block';
        // closeBtn.classList.add()
        // closeBtn.style.display = 'block';
    } else {
        menu.classList.remove('block');
        // closeBtn.style.display = 'none';
      //  list.style.display = 'none';
        box.style.display = 'none';
        navContainerId.classList.remove('blur');


    }
});
closeBtn.addEventListener('click', function () {
    menu.className = 'navbar'
    box.style.display = 'none';
    for (let i =0; i< listContainer.length; i++){
        listContainer[i].style.display = 'none';
    }


    // listContainer.forEach((l)=>{l.style.display === 'block'?l.style.display = 'none':l.style.display = 'block'});

});

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function () {
        modalClose[i].style.display = 'none'
        listContainer[i].classList.add('slideIn');
        listContainer[i].classList.remove('slideOut');
        // closeBtn.classList.add('hidden');
        const dropList = document.getElementsByClassName('droplist');
        for(let j=0; j < dropList.length; j++){
            if(dropList[j].classList.contains('droplist')){
                dropList[j].style.display = 'none';
            }
        }
        setTimeout(() => {
            listContainer[i].style.display = 'none';
            navContainerId.classList.remove('blur');
        }, timeoutSpeed);
    })
}


function loadNavItems(items) {
    const navMenu = document.getElementById('nav');

    for(let i=0; i<items.length; i++){
        const navListTag = document.createElement('li');
        const aTagNav = document.createElement('a');
        aTagNav.innerHTML = items[i].navTitle
        aTagNav.className = items[i].class
        aTagNav.href = items[i].href
        navListTag.className = 'navItem '+[i+1];
        navListTag.appendChild(aTagNav);

        if(items[i].dropdown) {
            //create the ul container if dropdowns is true
            //add class etc
            const ulTag = document.createElement('ul');
            ulTag.className = 'droplist';
            ulTag.classList.add([i]);
            ulTag.style.display = 'none';

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

                // list.appendChild(ulTag);

                // navMenu.appendChild(ulTag);
                //append to newly cvreated ul here
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
           // divTag.id = 'list';
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
    console.log(closeModal)
    for (let i = 0; i < dropbtn.length; i++) {
        dropbtn[i].addEventListener('click', function (e) {
            // e.preventDefault();
            // e.stopPropagation();
            // e.stopImmediatePropagation()
            // console.log(e);
            // console.log(listContainer);
         //   listContainer.forEach((l) => {
                if (listContainer[i].classList.contains('slideOut')) {
                    listContainer[i].classList.remove('slideOut')
                    listContainer[i].classList.add('slideIn');
                    listContainer[i].style.display = 'none';
                    dropList[i].style.display = 'none';
                    // closeBtn.style.display = 'none';

                } else {
                    listContainer[i].style.display = 'block';
                    dropList[i].style.display = 'block';
                    closeModal[i].style.display = 'block';
                    listContainer[i].classList.add('slideOut');
                    listContainer[i].classList.remove('slideIn');
                    // navContainerId.style.filter = 'blur(4px)'
                    // navContainerId.classList.add('blur');

                    // listContainer[i].style.filter = 'none';
                    // listContainer[i].classList.add('blur');
                }


        })

    }

}





