

const tBody = document.querySelector('tbody');

const renderGoods = (obj) => {
for (const elem of obj) {
    const row = tBody.insertRow();
    for (const key in elem) {
      const cell = row.insertCell();
      const text = document.createTextNode(elem[key]);
      cell.appendChild(text);
    }
} };

export default renderGoods;   



