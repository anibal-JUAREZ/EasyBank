const menuBurger = document.querySelector('.menu-burger');

const menuOptions= document.querySelector('.menu-options');

//REMOVE THE CLASS SHOW WHEN THE SCREEN CHANGES OF SIZE AND CHANGE THE MENU BURGER ICON
window.addEventListener("resize", ()=>{
   if(screen.width > 375){
        if(menuOptions.classList.contains('show')){
            menuOptions.classList.remove('show');
            menuBurger.src="./images/icon-hamburger.svg";
           
        }
   }
});

 //SHOW THE MENU FOR MOBILE SCREEN AND CHANGE THE ICON
menuBurger.addEventListener('click',(e)=>{

    const photoName=e.target.src;
    if(photoName.includes('icon-hamburger.svg')) {
        e.target.src="./images/icon-close.svg";
       
    }else{
        e.target.src="./images/icon-hamburger.svg";
    }
    
    menuOptions.classList.toggle('show');
   

})
