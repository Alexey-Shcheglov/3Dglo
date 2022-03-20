import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import validator from './modules/validator';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForms';

timer('24 march 2022');
menu();
modal();
scroll();
validator();
tabs();
calc(100);
slider({
	slider: 'portfolio-content',
	slide: 'portfolio-item',
	sliderBtn: 'portfolio-btn',
	dotContainer: 'portfolio-dots',
	dot: 'dot',
	slideActive: 'portfolio-item-active',
	dotActive: 'dot-active',
	arrowLeft: '#arrow-left',
	arrowRight: '#arrow-right',
 });
 sendForm({ 
	formId: 'form1', 
	someElement: [
		{
			type: 'block',
			id: 'total'
		}
	] 
});
sendForm({formId: 'form2'});
sendForm({formId: 'form3'});


