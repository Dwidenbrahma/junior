
const desktopFeatureP = document.getElementById("Features");
const desktopCompany  = document.getElementById("Company");
const myMenuIcon = document.getElementById("menu");
const myCloseIcon = document.getElementById("close-icon");
const myArrowImg = document.querySelectorAll(".arrow-img");
const mobileExpand_1 = document.getElementById("mobilew");
const mobileExpand_2 = document.getElementById("company");
const toNewDiv = document.querySelectorAll("#change");


//Desktop


desktopFeatureP.addEventListener("click", ()=>{
    myArrowImg[0].style.transform = "rotate(180deg)";
    document.getElementById("ex-card-1").style.display = "grid";
    document.getElementById("ex-card-2").style.display = "none"
    myArrowImg[1].style.transform = "rotate(0)";

});

desktopCompany.addEventListener("click", ()=>{
    myArrowImg[1].style.transform = "rotate(180deg)";
    document.getElementById("ex-card-2").style.display = "grid"
    document.getElementById("ex-card-1").style.display = "none";
    myArrowImg[0].style.transform = "rotate(0)";


});
//Media

function close(n){
    myArrowImg[n].src = "/images/icon-arrow-down.svg";

}
function open(n){
    myArrowImg[n].src = "/images/icon-arrow-down.svg";
}


for (let index = 0; index < myArrowImg.length; index++) {
    const element = myArrowImg[index];
    element.addEventListener("click", ()=>{
  

        element.src = "/images/icon-arrow-up.svg";
        if(index == 2){
            mobileExpand_1.style.display = "grid";
            mobileExpand_2.style.display = "none";
            close(3)
    
          
        }else if(index == 3){
     
           mobileExpand_1.style.display = "none";
           mobileExpand_2.style.display = "grid";
            close(2);
        }
   
    
});
}
for (let index = 0; index < toNewDiv.length; index++) {
    const element = toNewDiv[index];
    element.addEventListener("click", ()=>{
  

      
        if(index == 0){
            mobileExpand_1.style.display = "grid";
            mobileExpand_2.style.display = "none";
            close(3)
    
          
        }else if(index == 1){
     
           mobileExpand_1.style.display = "none";
           mobileExpand_2.style.display = "grid";
            close(2);
        }
   
    
});
}



myMenuIcon.addEventListener("click", ()=>{
    document.getElementById("mobile-expand").style.display = "block";
    myMenuIcon.style.display = "none";

});
myCloseIcon.addEventListener("click", ()=>{
    document.getElementById("mobile-expand").style.display = "none";
    myMenuIcon.style.display = "block";

});