'use strict';

const obj = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': 'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    'category': 'mobile-phone',
    'discont': false,
    'count': 3,
    'units': 'шт',
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
];
const table = document.createElement('table');
table.setAttribute('border', '1');
const createRow = (obj) => {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const key of obj) {
    const th = document.createElement('th');
    const text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
    table.appendChild(row);
    document.body.appendChild(table);
  }
};

const renderGoods = (obj) => {
  for (const elem of obj) {
    const row = table.insertRow();
    for (const key in elem) {
      const cell = row.insertCell();
      const text = document.createTextNode(elem[key]);
      cell.appendChild(text);
    }
  }
};


const data = Object.keys(obj[0]);
createRow(data);
renderGoods(obj);


