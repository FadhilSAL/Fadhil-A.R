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





const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalDetail');
const modalContent = document.getElementById('modalContent');

const body = document.body;

function openModal(projectnumber) {

    const projectName = document.getElementById('projectName');
    const projectImage = document.getElementById('projectImage');
    const projectTechno = document.getElementById('projectTechnology');


    if(projectnumber == 1){
       
      projectName.innerText = 'Amimoy E-commerce';
      
      projectImage.src = 'Amimoye-commerce.png';

      const projectTechnoImg = ` Menggunakan : <img src='Tailwind CSS.png'> <img src='React.png'> <img src='HTML5.png'> <img src='JavaScript.png'>  `
      projectTechno.innerHTML = `${projectTechnoImg}`;

      document.getElementById('description').innerText = 'Amimoy e-commerce statis yang hanya memiliki fitur simpan produk ke keranjang , dan cari produk sesuai dengan namanya , nama Amimoy kuambil dari seseorang yang aku kagumi'
      

   }


    if(projectnumber == 2){
       
      projectName.innerText = 'Shooping note';
      
      projectImage.src = 'shooping-note3.png';

      const projectTechnoImg = ` Menggunakan : <img src='Tailwind CSS.png'> <img src='React.png'> <img src='HTML5.png'> <img src='JavaScript.png'>  `
      projectTechno.innerHTML = `${projectTechnoImg}`;

      document.getElementById('description').innerText = 'Catatan belanja , anda bisa memasukkan barang yang ingin kalian beli dan tentukan jumlahnya maka tools ini akan menghitung total harga barang'
      

   }
    modalOverlay.classList.remove('hiding'); 
    modalOverlay.classList.add('active');
    body.classList.add('modal-open'); 
}

function closeModal() {
  
    
    
    
      modalOverlay.classList.remove('active');
   
        body.classList.remove('modal-open');
  
}


closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) { 
        closeModal();
    }
});


document.addEventListener('keydown', (event) => {
   
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});