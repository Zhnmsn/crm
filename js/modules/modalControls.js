

    
const clickList = () => {
    const listBody = document.querySelector('body');

    listBody.addEventListener('click', e => {
        console.log(e.target);
        if(e.target.closest('.cms__add-button')) {
            elements.form.classList.add('is-visible');
        }  
        
        if(e.target.closest('.section__close-button') || e.target.closest('.form__section') ) {
                elements.form.classList.remove('is-visible');
        }     
    });

};


export default clickList;