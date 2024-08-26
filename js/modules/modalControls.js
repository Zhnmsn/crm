export const openModal = ({form}) => {
    form.classList.add('is-visible');
};

export const closeModal = ({form}) => {
    form.classList.remove('is-visible');
};

    
 //const clickList = (elements) => {
    //const listBody = document.querySelector('body');

   // table.addEventListener('click', e => {
   //     console.log(e.target);
  //      if(e.target.closest('.cms__add-button')) {
 //           elements.form.classList.add('is-visible');
 //       }  
        
 //       if(e.target.closest('.section__close-button') || e.target.closest('.form__section') ) {
 //               elements.form.classList.remove('is-visible');
//        }     
 //   });

//};


//export default clickList;


