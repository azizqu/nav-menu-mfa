let navList = document.getElementsByClassName('icon');
console.log(navList);

let hamburger = navList[0];

hamburger.addEventListener('click',function(){
        // alert('works!')
        var x = document.getElementById("myTopNav");
        if(x.className ==="navbar"){
            x.className += " responsive";
        } else{
            x.className = "navbar";
        }
    })
