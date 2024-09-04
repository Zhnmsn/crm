
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
    const list = document.querySelector('.table__body');
    const clearForm = document.querySelector('.form');
    const delBtn = document.querySelector('.all-btn3');
    const cont = document.querySelector('.contact');
    return {
        addTitle,
        editTitle,
        idNumbers,
        closeButon,
        form,
        table,
        addButton,
        checkbox,
        discountText,
        totalSum,
        list,
        clearForm,
        delBtn,
        cont,
    };
};
export default getPageElements;

