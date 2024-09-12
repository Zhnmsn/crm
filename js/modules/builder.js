import { InitialValue } from "./goods.js";

const data = InitialValue;

    
export const createRow = ({id, title, category, count, units, price, sum } ) => {
    
    const tBody = document.querySelector('tbody');
        
    const tr = document.createElement('tr');
    tr.classList.add('contact');
    tr.addEventListener('click', () => {  //при клике - если ряд
        const rowIn = tr.rowIndex;
        if(rowIn === 1) {
            data.splice(0,1);  //  удалить 1 эелемент начиная с нулевого (0)
        } if(rowIn === 2) {
            data.splice(1,1);  // удалить один элемент начиная с 1го (со второго)
        } console.log(data, tr.rowIndex);
    });    
    tBody.append(tr);
        
    const tdTitle = document.createElement('td');
    tdTitle.textContent = title;
    tdTitle.classList.add('table__about');

    const tdCategory = document.createElement('td');
    tdCategory.textContent = category;
    tdCategory.classList.add('table__about-m');

    const tdId = document.createElement('td');
    tdId.textContent = id;
    tdId.classList.add('table__number');
    
    const tdCount = document.createElement('td');
    tdCount.textContent = count;
    tdCount.classList.add('table__amount-m');

    const tdUnits = document.createElement('td');
    tdUnits.textContent = units;
    tdUnits.classList.add('table__amount');

    const tdPrice = document.createElement('td');
    tdPrice.textContent = price;
    tdPrice.classList.add('table__price');

    const tdSum = document.createElement('td');
    tdSum.textContent = sum;
    
    tdSum.classList.add('table__all-price');
    

    const tdBtnImg= document.createElement('td');
    let btnNew = document.createElement('button');
    let img1 = document.createElement('img');
    img1.src = "img/no-picture.svg";
    btnNew.append(img1);
    tdBtnImg.append(btnNew);
    tdBtnImg.classList.add('table__all-btn');

    const tdBtnEdit = document.createElement('td');
    let btnNew2 = document.createElement('button');
    let img2 = document.createElement('img');
    img2.src = "img/edit-svg.svg";
    btnNew2.append(img2);
    tdBtnEdit.append(btnNew2);
    tdBtnEdit.classList.add('all-btn2');
    
    const tdBtnDel = document.createElement('td');
    let btnNew3 = document.createElement('button');
    let img3 = document.createElement('img');
    img3.src = "img/trash-svg-table.svg";
    img3.classList.add('delete-img');
    btnNew3.append(img3);
    tdBtnDel.append(btnNew3);
    tdBtnDel.classList.add('all-btn3');
        
    tr.append(tdId, tdTitle, tdCategory, tdUnits, tdCount, tdPrice, tdSum, tdBtnImg, tdBtnEdit, tdBtnDel);

    return tr;
}

    const renderGoods =(data, elements) => {
        const outputTable = elements.list; 
                data.map(item => {
                outputTable.append(createRow(item))
            })
    };

    export default renderGoods;

    