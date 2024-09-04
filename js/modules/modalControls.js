
export const openModal = ({form}) => {
    form.classList.add('is-visible');
};

export const closeModal = ({form}) => {
    form.classList.remove('is-visible');
};




export const pageControls = (elements) => {
    const {addButton, form, closeButon, table} = elements;
    
    addButton.addEventListener('click',  () => {
        openModal(elements);
    });
    form.addEventListener('click', e => {
        const target = e.target;
        if(target === form || target === closeButon) {
            closeModal(elements);
        };
    });

    table.addEventListener('click', e => {
        const target = e.target;
        if(target.closest('.delete-img')) {
            target.closest('.contact').remove();
            
            };
    });  
    
    

};




