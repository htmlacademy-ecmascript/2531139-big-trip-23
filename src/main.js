import Presenter from './presenter/presenter.js';
import { render, RenderPosition } from './render.js';
import TripInfoView from './view/trip-info-view.js';
import TripControlsView from './view/trip-controls-view.js';
import TripModel from './model/trip-model.js';


const siteMainElement = document.querySelector('.trip-events');
const siteTripInfo = document.querySelector('.trip-main');
const siteTripControls = document.querySelector('.trip-controls');

const tripModel = new TripModel();
tripModel.init();

render(new TripInfoView, siteTripInfo, RenderPosition.AFTERBEGIN);
render(new TripControlsView, siteTripControls, RenderPosition.AFTERBEGIN);

const presenter = new Presenter({container:siteMainElement, tripModel});

presenter.init();
