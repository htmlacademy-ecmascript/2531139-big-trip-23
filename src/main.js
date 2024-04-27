import Presenter  from './presenter/presenter.js';

const siteMainElement = document.querySelector('.trip-events');
const presenter = new Presenter({ container: siteMainElement });

presenter.init();