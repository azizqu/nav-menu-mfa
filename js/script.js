let navList = document.getElementsByClassName('icon');
console.log(navList);

let hamburger = navList[0];

hamburger.addEventListener('click',function(){
    
        const menu = document.getElementById("myTopNav");
        const close = document.getElementById("close-btn");
        if(menu.className ==="navbar"){
            menu.className += " responsive";
            close.style.display = "block"
        } 
        // else{
        //     menu.className = "navbar";
        // }
        else{
            close.style.display = "none"
        }
        
    })

    let closeBtn = document.getElementsByClassName('icon-close');
    console.log(closeBtn)
    let closeHam = closeBtn[0];
    //close ONLY
    closeHam.addEventListener('click', function(){
        const x = document.getElementById("myTopNav");
        const close = document.getElementById("close-btn");
        if(x.className != "navbar"){
            if(x.className === "navbar"){
                x.className += " responsive";
                
                
            }else{
                x.className = "navbar";
                close.style.display = "none"
                
            }
            
        }
       
    })


