const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closebtn");
const menu = document.getElementById("nav");
const dropbtn = document.getElementsByClassName("dropbtn");
const modalClose = document.getElementsByClassName("mclosebtn");
const listContainer = document.getElementsByClassName("listcontainer")
const list = document.getElementById("list");
const modalBlur = document.getElementById("modal-blur")
const navContainerId = document.getElementById("nav-container-id");
const timeoutSpeed = 600;


for (let i = 0; i < dropbtn.length; i++) {
    dropbtn[i].addEventListener("click", function () {
        if (list.classList.contains('slideOut')) {
            list.classList.remove('slideOut')
            list.classList.add('slideIn');
            listContainer[i].style.display = "none";
            // closeBtn.classList.add('hidden');
            closeBtn.style.display = "none";
        } else {
            listContainer[i].style.display = "block";
            modalClose[i].style.display = "block";
            list.classList.add('slideOut');
            list.classList.remove('slideIn');
            navContainerId.classList.add('blur');
        }
    })
}

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener("click", function () {
        modalClose[i].style.display = "none"
        list.classList.add('slideIn');
        list.classList.remove('slideOut');
        closeBtn.classList.add('hidden');
        // closeBtn.style.display = "block";
        setTimeout(() => {
            list.style.display = "none";
            navContainerId.classList.remove('blur');
        }, timeoutSpeed);
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
        navContainerId.classList.remove('blur');


    }
});
closeBtn.addEventListener("click", function () {
    menu.className = 'navbar'
    closeBtn.classList.remove('hidden');
    list.style.display = 'none';
});


// JSON - DATA.JSON
// fetch('./DATA.json')
//     .then(function (response){
//         return response.json();
//     })
//     .then((data) => {
//        appendData(data);
//         // console.log(data);
//      //   console.log(data.json());
//     })
//     .catch(error => console.log("Error "+error));
//
// function appendData(data){
//     let listContainer = document.getElementById("dropListId");
//     for(let i =0; i< data["listItems"].length; i++){
//         let listTag = document.createElement("li")
//         let aTag = document.createElement("a");
//         let itemText = document.createTextNode(data["listItems"][i].title)
//         aTag.href = data["listItems"][i].href
//
//         aTag.appendChild(itemText);
//         listTag.appendChild(aTag);
//         listContainer.appendChild(listTag);
//         // console.log(listContainer)
//     }
// }

// JSON - data2.json

fetch('./data2.json')
    .then(function (response){
        return response.json();
    })
    .then((navData)=>{
        appendNavData(navData);
        console.log(navData["navLinks"])
        // console.log(navData["navLinks"][0].navTitle) //example
    })
    .catch(error => console.log("Error: "+error));

//const menu = document.getElementById("nav");
function appendNavData(navData){
    let navMenu = document.getElementById(("nav"))
    let dropListContainer = document.getElementById("dropListId")

    for(let i=0; i< navData["navLinks"].length; i++){
        console.log("Stored: "+navData["navLinks"][i]);
            // console.log(navData["navLinks"][i].length)
            let listTag = document.createElement("li")
            let aTagNav = document.createElement("a");

            let listTagDrop = document.createElement(("li"));
            let aTagDrop = document.createElement("a");

            if(navData["navLinks"][i].dropdown === false){
                aTagNav.innerHTML += navData["navLinks"][i].navTitle
                aTagNav.href = navData["navLinks"][i].href
                aTagNav.className = navData["navLinks"][i].class
                listTag.appendChild(aTagNav);
                navMenu.appendChild(listTag);

                // for(let j=0; j< navData["navLinks"][i])

            } else if(navData["navLinks"][i].dropdown === true){
                aTagNav.innerHTML += navData["navLinks"][i].navTitle
                aTagNav.href = navData["navLinks"][i].navHref
                aTagNav.className = navData["navLinks"][i].class
                listTag.appendChild(aTagNav);
                navMenu.appendChild(listTag);

                console.log(navData["navLinks"][i]["dropdownItems"])
                aTagDrop.innerHTML += navData["navLinks"][i]["dropdownItems"].title;
                aTagDrop.href = navData["navLinks"][i]["dropdownItems"].href;
                listTagDrop.appendChild(aTagDrop);
                dropListContainer.appendChild(listTagDrop);




            }


    }


}
