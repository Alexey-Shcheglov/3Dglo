'use strict';

const validator = () => {
	const inputText = document.querySelectorAll('input[type = text]');
	const inputEmail = document.querySelectorAll('input[type = email]');
	const inputTel = document.querySelectorAll('input[type = tel]');
	const textarea = document.getElementById('form2-message');

	inputText.forEach((item) => {
		item.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^\sа-яА-Я-]+/i, "");
		});
	});
	inputEmail.forEach((item) => {
		item.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^\w@_\-.!~*']+/, "");
		});
	});
	inputTel.forEach((item) => {
		item.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^\d()-]+/, "");
		});
	});
	textarea.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^\sа-яА-Я-]+/i, "");
	});
	const delSpace = (e) => {
		e.target.value = e.target.value.replace(/^[\s-]*/, "");
		e.target.value = e.target.value.replace(/[\s-]*$/, "");
		e.target.value = e.target.value.replace(/-{2,}/g, "-");
		e.target.value = e.target.value.replace(/\s{2,}/g, " ");
	};
	inputText.forEach(item => {
		item.addEventListener('blur', (e) => {
			delSpace(e);
		});
	});
	inputEmail.forEach(item => {
		item.addEventListener('blur', (e) => {
			delSpace(e);
		});
	});

	inputTel.forEach(item => {
		item.addEventListener('blur', (e) => {
			delSpace(e);
		});
	});
	textarea.addEventListener('blur', (e) => {
		delSpace(e);
	});

	// первая буква в верхнем регистре

	inputText.forEach((item) => {
		item.addEventListener('blur', (e) => {
			const inputValueArr = [];
			let value = e.target.value;
			value = value.trim().split(" ");
			value.forEach(el => {
					el = el[0].toUpperCase() + el.slice(1).toLowerCase();
					inputValueArr.push(el);
			});
			e.target.value = inputValueArr.join(' ');
		});
	});

};

export default validator;