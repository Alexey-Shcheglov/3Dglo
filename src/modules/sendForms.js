'use strict';

const sendForm = ({ formId, someElement = [] }) => {
	const form = document.getElementById(formId);
	const statusBlock = document.createElement('div');
	const loadText = "Загрузка...";
	const errorText = 'Ошибка';
	const successText = 'Спасибо за Вашу заявка! Мы свяжемся с вами ближайшее время';

	statusBlock.style.color = '#C3C3C3';

	const validate = (list) => {
		let success = true;

		list.forEach(item => {
			if (item.name === 'user_name') {
				if(item.value.length < 2) {
					success = false;
				}
			} else if (item.name === 'user_phone') {
				if(item.value.length < 11) {
					success = false;
				}
			} else if (item.name === 'user_message') {
				if(item.value.length < 2) {
					success = false;
				}
			} else {
					success = true;
			}
		});

		return success;
	};

	const sendData = (data) => {
		return fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
					'Content-type': 'application/json; charset=UTF-8',
			},
		}).then(response => response.json())
			.then(data => {
					console.log(data);
			})
			.catch(error => console.log(error));
	};

	const submitForm = () => {
		const formElements = form.querySelectorAll('input');
		const formData = new FormData(form);
		const formBody = {};

		statusBlock.textContent = loadText;
		form.append(statusBlock);

		formData.forEach((val, key) => {
			formBody[key] = val;
		});

		someElement.forEach(elem => {
			const element = document.getElementById(elem.id);

			if(elem.type === 'block') {
					formBody[elem.id] = element.textContent;
			} else if (elem.type === 'input') {
					formBody[elem.id] = element.value;
			}
		});


		if(validate(formElements)) {
			sendData(formBody)
					.then(data => {
						statusBlock.textContent = successText;

						formElements.forEach(input => {
							input.value = '';
						})
						setInterval(() => {
							statusBlock.textContent = "";
						}, 3500);
					})
					.catch(error => {
						statusBlock.textContent = errorText;
					});
		} else {
			formElements.forEach(input => {
					input.value = '';
			});
			statusBlock.textContent = "";
			alert('Введите верные данные!');
		}
	};

	try {
		if(!form) {
			throw new Error('Верните форму на место');
		}

		form.addEventListener('submit', (e) => {
			e.preventDefault();

			submitForm();
		});
	} catch (error) {
		console.log(error.message);
	}
};

export default sendForm;