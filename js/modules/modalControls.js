import { createRow } from "./builder.js";
import { InitialValue } from "./goods.js";
import getPageElements from "./pageElement.js";

const elements = getPageElements();
const data = InitialValue;

export const openModal = ({form}) => {
    form.classList.add('is-visible');
};

export const closeModal = ({form}) => {
    form.classList.remove('is-visible');
};

export const pageControls = (elements) => {
    const {addButton, form, closeButon, table, checkbox, 
        discountText, inputPrice, inputCount, totalSum} = elements;
            
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
    
    checkbox.addEventListener('change', e => {
            if (discountText.disabled = !e.target.checked) {
                    discountText.value = '';
            }
        });
        let allSum = 0;
        inputPrice.addEventListener('blur', e => {
            allSum = inputPrice.value * inputCount.value;
            totalSum.textContent = allSum;
            return allSum;
        })
        
        inputCount.addEventListener('blur', e => {
            allSum = inputPrice.value * inputCount.value;
            totalSum.textContent = allSum;
            return allSum;
        })
        
        
};

const newTdSum = (elements) => {
    const allSum = elements.inputPrice.value * elements.inputCount.value;
    
        return allSum;
    }


const addItems = (item) => {
            data.push(item);
            console.log(data)
        };

const addPage = (item, table) => {
    table.append(createRow(item));
}

export const formControl = (form) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const tBody = document.querySelector('tbody');
        const newContact = Object.fromEntries(formData);
        
        addItems(newContact);
        addPage(newContact, tBody);

        addItems(newTdSum(elements));
        
        
       // form.reset();
        //closeModal(form);
});
}







