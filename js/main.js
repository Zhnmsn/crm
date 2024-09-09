'use strict'

import getPageElements from './modules/pageElement.js';
import {InitialValue} from './modules/goods.js';
import renderGoods from './modules/builder.js';
import { closeModal, pageControls } from './modules/modalControls.js';
import { formControl } from './modules/modalControls.js';


const init = () => {
    const elements = getPageElements();
    const data = InitialValue;
    renderGoods(data, elements);
    pageControls(elements);  
    formControl(elements.form, closeModal);
        
    
}

init();