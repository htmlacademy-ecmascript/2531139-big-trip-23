import Presenter from './presenter/presenter.js';
import { render, RenderPosition } from './render.js';
import TripInfoView from './view/trip-info-view.js';
import TripControlsView from './view/trip-controls-view.js';

const siteMainElement = document.querySelector('.trip-events');
const siteTripInfo = document.querySelector('.trip-main');
const siteTripControls = document.querySelector('.trip-controls');

const presenter = new Presenter({ container: siteMainElement });

render(new TripInfoView, siteTripInfo, RenderPosition.AFTERBEGIN);
render(new TripControlsView, siteTripControls, RenderPosition.AFTERBEGIN);

presenter.init();
