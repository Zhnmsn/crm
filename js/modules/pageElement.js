
const getPageElements = () => {
    const addTitle = document.querySelector('.form__title');
    const editTitle = document.querySelector('.form__title-m');
    const idNumbers = document.querySelector('.title-m');
    const closeButon = document.querySelector('.section__close-button');
    const form = document.querySelector('.form');
    const checkbox = document.querySelector('.discount_checkbox');
    const discountText = document.querySelector('.discount_text');
    const totalSum = document.querySelector('.form__foot-dollars');
    return {
        addTitle,
        editTitle,
        idNumbers,
        closeButon,
        form,
        checkbox,
        discountText,
        totalSum,
    };
};

export default getPageElements;