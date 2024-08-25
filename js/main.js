'use strict'

import getPageElements from './modules/pageElement.js';
import {InitialValue} from './modules/goods.js';
import renderGoods from './modules/builder.js';
import clickList from './modules/modalControls.js';

const init = () => {
    const elements = getPageElements();
    
    const data = InitialValue;
    renderGoods(data, elements);
    clickList();
            
} 

init();