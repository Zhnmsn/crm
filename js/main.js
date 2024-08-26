'use strict'

import getPageElements from './modules/pageElement.js';
import {InitialValue} from './modules/goods.js';
import renderGoods from './modules/builder.js';
import { pageControls } from './modules/pageElement.js';

const init = () => {
    const elements = getPageElements();
    const data = InitialValue;
    
    renderGoods(data, elements);
    pageControls(elements);      
} 

init();