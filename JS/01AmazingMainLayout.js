var cardMain = document.querySelector(".img-4");
var cardMain1 = document.querySelector(".img-1");
var cardMain2 = document.querySelector(".img-2");
var cardMain3 = document.querySelector(".img-3");

// cardMain.addEventListener("mouseover" , function(){
//     let card1 = document.querySelector(".img-1");
//     let card2 = document.querySelector(".img-2");
//     let card3 = document.querySelector(".img-3");
//     card1.style.transform = "translateX(300px)";
//     card2.style.transform = "translateX(100px)";
//     card3.style.transform = "translateX(-500px)";
// })

// cardMain.addEventListener("mouseout" , function(){
//     let card1 = document.querySelector(".img-1");
//     let card2 = document.querySelector(".img-2");
//     let card3 = document.querySelector(".img-3");
//     card1.style.transform = "";
//     card2.style.transform = "";
//     card3.style.transform = "";
// })

cardMain1.addEventListener("mouseover" , function(){
    cardMain1.style.zIndex = "1";
    // cardMain1.style.transform = "translate(-50% , -50%) rotate(0deg)";
})

cardMain1.addEventListener("mouseout" , function(){
    cardMain1.style.zIndex = "";
    // cardMain1.style.transform = "";
})

cardMain2.addEventListener("mouseover" , function(){
    cardMain2.style.zIndex = "1";
    // cardMain1.style.transform = "translate(-50% , -50%) rotate(0deg)";
})

cardMain2.addEventListener("mouseout" , function(){
    cardMain2.style.zIndex = "";
    // cardMain1.style.transform = "";
})

cardMain3.addEventListener("mouseover" , function(){
    cardMain3.style.zIndex = "1";
    // cardMain1.style.transform = "translate(-50% , -50%) rotate(0deg)";
})

cardMain3.addEventListener("mouseout" , function(){
    cardMain3.style.zIndex = "";
    // cardMain1.style.transform = "";
})