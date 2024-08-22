

const createRow = ({id, title, category, count, units, price, sum, btn1, btn2, btn3} ) => {
    
    const tBody = document.querySelector('tbody');
        
    const tr = document.createElement('tr');
    tr.dataset.tdId = 'trRowID';
    console.log(tr.dataset);
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
    tdSum.classList.add('thead__all-price');

    const tdBtn1= document.createElement('td');
    tdBtn1.textContent = btn1;
    tdBtn1.classList.add('table__all-btn');

    const tdBtn2 = document.createElement('td');
    tdBtn2.textContent = btn2;
    tdBtn2.classList.add('table__all-btn');

    const tdBtn3 = document.createElement('td');
    tdBtn3.textContent = btn3;
    tdBtn3.classList.add('table__all-btn');
    
    tr.append(tdId, tdTitle, tdCategory, tdCount, tdUnits, tdPrice, tdSum, tdBtn1, tdBtn2, tdBtn3);

    return tr;
}


    const renderGoods =(data, elements) => {
        const outputTable = elements.list;
                data.map(item => {
                outputTable.append(createRow(item))
            })
    };

    export default renderGoods;