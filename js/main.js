'use strict'

import getPageElements from './modules/pageElement.js';
import {InitialValue} from './modules/goods.js';
import renderGoods from './modules/builder.js';

const init = () => {
    const elements = getPageElements();
    const data = InitialValue;
    renderGoods(data, elements);
    console.log('elements', elements);
    console.log('data', data);
}

init();