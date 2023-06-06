var dragVal;
var section2 = document.getElementById('s2');
var section3 = document.getElementById('s3');
var section4=document.getElementById('s4');
let v1=()=>{
    var menu = document.querySelector('.hidden');
    if (menu.classList.contains("active")){
        toggleMenu();
    }
    
    section2.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
let v2=()=>{
    var menu = document.querySelector('.hidden');
    if (menu.classList.contains("active")){
        toggleMenu();
    }
    section3.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

let v3=()=>{
    var menu = document.querySelector('.hidden');
    if (menu.classList.contains("active")){
        toggleMenu();
    }
    section4.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}


toggleMenu = ()=>{

    var menu = document.querySelector('.hidden');
    var animation = document.getElementById("toggle-target");
    menu.classList.toggle("active");
    animation.classList.toggle("active");

    

}


loginFunction = ()=> {

    console.log("aa");
    var username = document.getElementById("username");
    var password = document.getElementById("pass");

    if (username.value == "saed" && password.value=="123"){
        location.href = '/index.html';
    }

}
