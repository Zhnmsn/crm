
const getPageElements = () => {
    const addTitle = document.querySelector('.form__title');
    const editTitle = document.querySelector('.form__title-m');
    const idNumbers = document.querySelector('.title-m');
    const closeButon = document.querySelector('.section__close-button');
    const form = document.querySelector('.form__section');
    const table = document.querySelector('.cms__section');
    const addButton = document.querySelector('.cms__add-button');
    const checkbox = document.querySelector('.discount_checkbox');
    const discountText = document.querySelector('.discount_text');
    const totalSum = document.querySelector('.form__foot-dollars');
    const totalSumTable = document.querySelector('.form__foot-doll');
    const list = document.querySelector('.table__body');
    const clearForm = document.querySelector('.form');
    const delBtn = document.querySelector('.all-btn3');
    const cont = document.querySelector('.contact');
    const inputPrice = document.querySelector('.input-price'); 
    const inputCount = document.querySelector('.input-count');
    const inputDescription = document.querySelector('.input-description');
    const inputUnits = document.querySelector('.input-units');
    const inputCategory = document.querySelector('.input-category');
    const inputName = document.querySelector('.input-name');
    const tdAllPrice = document.querySelector('.table__all-price');
    const tPrice = document.querySelector('.table__price');
    const tCount = document.querySelector('.table__amount');
    return {
        addTitle,
        tPrice,
        tCount,
        editTitle,
        idNumbers,
        closeButon,
        form,
        table,
        addButton,
        checkbox,
        discountText,
        totalSum,
        totalSumTable,
        list,
        clearForm,
        delBtn,
        cont,
        inputPrice,
        inputCount,
        inputDescription,
        inputUnits,
        inputCategory,
        inputName,
        tdAllPrice,
    };
};
export default getPageElements;

