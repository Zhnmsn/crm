'use strict'

import getPageElements from './modules/pageElement.js';
import {InitialValue} from './modules/goods.js';
import renderGoods from './modules/builder.js';

const init = () => {
    const elements = getPageElements();
    
    const data = InitialValue;
    renderGoods(data, elements);

    elements.clearForm.addEventListener('click', event => {
        event.stopPropagation();
    });

    elements.addButton.addEventListener('click', () => {
        elements.form.classList.add('is-visible');
        });

    elements.form.addEventListener('click', () => {
        elements.form.classList.remove('is-visible');
        });


    elements.closeButon.addEventListener('click', () => {
        elements.form.classList.remove('is-visible');
        });
    console.log('elements', elements);
    console.log('data', data);
}

init();