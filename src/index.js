import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import validator from './modules/validator';
import tabs from './modules/tabs';
import slider from './modules/slider';


timer('10 march 2022');
menu();
modal();
scroll();
validator();
tabs();
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


