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

    table.addEventListener('click', e => {  // удаление строки c классом contact - если кликнуть на класс delete-img
        const target = e.target;
        if(target.closest('.delete-img')) {
            target.closest('.contact').remove();
            
            };
    });  
    
    checkbox.addEventListener('change', e => {    // при деактивации чекбокса - очищение поля дискаунт
            if (discountText.disabled = !e.target.checked) {  
                    discountText.value = '';
            }; 
            
        });

        let allSum = 0;

        inputPrice.addEventListener('blur', e => {  // изменение общей цены по потери фокуса
            if(discountText.value > 0) {
                allSum = inputPrice.value * inputCount.value - (inputPrice.value * inputCount.value * (elements.discountText.value / 100));
            } if (discountText.value <= 0) {
                allSum = inputPrice.value * inputCount.value ;
            } 
            totalSum.textContent = allSum;
            return allSum;
        });

        discountText.addEventListener('blur', e => {  // изменение общей цены по потери фокуса
            if(discountText.value > 0) {
                allSum = inputPrice.value * inputCount.value - (inputPrice.value * inputCount.value * (elements.discountText.value / 100));
            } if (discountText.value <= 0) {
                allSum = inputPrice.value * inputCount.value ;
            } if(discountText.value > 100 || discountText.value < 0) {
                alert('Дисконт от 0 % до 100 %');
            } 
            totalSum.textContent = allSum;
            return allSum;
        })
        
        inputCount.addEventListener('blur', e => {  // изменение общей цены по потери фокуса
            if(discountText.value > 0) {
                allSum = inputPrice.value * inputCount.value - (inputPrice.value * inputCount.value * (elements.discountText.value / 100));
            } if (discountText.value <= 0) {
                allSum = inputPrice.value * inputCount.value ;
            }
            
            totalSum.textContent = allSum;
            return allSum;
        });
                
};

const newTdSum = (elements) => {     // сумма элементов c учетом дисконта!
    let allSum;
    if(elements.discountText.value > 0) {
        allSum = elements.inputPrice.value * elements.inputCount.value - (elements.inputPrice.value * elements.inputCount.value * (elements.discountText.value / 100));
    } if (elements.discountText.value <= 0) {
        allSum = elements.inputPrice.value * elements.inputCount.value ;
    }
    elements.totalSum.textContent = allSum;
            return allSum;
    };

    const getNewArr = data => {          // получение массива сумм элементов
        let arr = [];
            for(let i = 0; i <= data.length - 1; i++) {
                arr.push(data[i].sum);
            }  return arr;
        };
        
    let count = 3;
    let zeroLength = 4;

    const addItems = (item) => {     // добавление товара в обект массивов данных
            data.push(item);
            
            item.id = String(count).padStart(zeroLength, '0');  // добавление дополнительных нулей перед ID
            count++;
        };

const addPage = (item, table) => {    // добавление товара (строки)  в таблицу!
    table.append(createRow(item));
};

export const formControl = (form) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const tBody = document.querySelector('tbody');
        const newContact = Object.fromEntries(formData);
        newContact.sum = newTdSum(elements);
        
        addItems(newContact);
        addPage(newContact, tBody);
        
        getNewArr(data);  // сумма всех элементов массива
        const getNewSum = getNewArr(data).reduce((acc, cur) => {
            acc= acc + cur;
            return acc ;
    });
    
        elements.totalSumTable.textContent = getNewSum;   // присвоим графе сумма в таблице значение
                
       // form.reset();
       //closeModal(form);
});
};







