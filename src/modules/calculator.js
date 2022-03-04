'use strict';


const calculator = () => {
    const calcItems = document.querySelectorAll('input.calc-item');

    const getNumber = (e) => {
        e.target.value = e.target.value.replace(/\D+/, "");
    };

    calcItems.forEach((item) => {
        item.addEventListener('input', (e) => {
            getNumber(e);
        });
    });

};

export default calculator;