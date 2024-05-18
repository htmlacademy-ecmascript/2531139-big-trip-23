import { createElement } from '../render.js';
import { humanizeDate, getDateDif } from '../utils.js';

function creatOffersTemplate (offers){
  const {title, price} =  offers;
  return `<li class="event__offer">
  <span class="event__offer-title">${title}</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${price}</span>
</li>`;
}

const createEventItemTemplate = (points, destinations, offers) => {

  const {type, dateFrom, dateTo, isFavorite, basePrice, destination: destinationId, offers:offerIds} = points;
  const isFavoriteEvent = isFavorite ? '--active' : '';
  const destinationName = destinations.find((destination) => destination.id === destinationId).name;
  const possibleOffers = offers.find((offersType) => offersType.type === type).offers;
  const pointOffers = possibleOffers.filter((possibleOffer) => offerIds.includes(possibleOffer.id))

  return `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="2019-03-18">${humanizeDate(dateFrom, 'MMM DD')}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${destinationName}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T14:30">${humanizeDate(dateFrom, 'HH:MM')}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T16:05">${humanizeDate(dateTo, 'HH:MM')}</time>
      </p>
      <p class="event__duration">${getDateDif(dateFrom,dateTo)}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
    ${pointOffers.map(creatOffersTemplate).join('')}
    </ul>
    <button class="event__favorite-btn  event__favorite-btn${isFavoriteEvent}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
  </li>`
};

export default class EventItemView {
  constructor({points, destinations, offers}){
    this.points = points;
    this.destinations = destinations;
    this.offers = offers;
  }
  getTemplate(){
    return createEventItemTemplate(this.points, this.destinations, this.offers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
