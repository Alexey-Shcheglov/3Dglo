import { animate } from "./helpers";

const modal = () => {
	const modal = document.querySelector('.popup');
	const content = modal.querySelector('.popup-content');
	const buttons = document.querySelectorAll('.popup-btn');

	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			let count = 0;
			let idInterval;

			content.style.top = '0%';
			const anim = () => {
				
				count++;
				idInterval = requestAnimationFrame(anim);
				if(count <= 15) {
					animate({
						duration: 100,
						timing(timeFraction) {
							return timeFraction;
						},
						draw(progress) {
							modal.style.display = 'block';
							content.style.top = progress * count  + "%";
						}		
					});
				} else {
					cancelAnimationFrame(idInterval);
				}
			};
		

			anim();
		});
	});

	modal.addEventListener('click', (e) => {
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
			modal.style.display = 'none';
		}
	});
};

export default modal;