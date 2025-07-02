const hamburgerButton = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.menu-hamburger');
const hamburgerLine = document.querySelectorAll('.hamburger-line');

hamburgerButton.addEventListener('click',function(){
    hamburgerMenu.classList.toggle('active');
    
    for(let i  = 0; i<hamburgerLine.length; i++){
        if(i == 0){
   
            hamburgerLine[i].classList.toggle('top');
        }
          if(i == 1){

            hamburgerLine[i].classList.toggle('mid');
        }
          if(i == 2){

            hamburgerLine[i].classList.toggle('bottom');
        }
    }

    // if(hamburgerMenu.classList.contains('active')){

    // }else{
    //     hamburgerMenu.classList.add('active');
    // }
    

})