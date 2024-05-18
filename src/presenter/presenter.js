import { render } from '../render';
import EventListView from '../view/event-list-view';
import SortView from '../view/sort-view';
import FormEditView from '../view/form-edit-view';
import EventItemView from '../view/event-item-view';
import { EVENT_COUNT } from '../model/trip-model';

export default class Presenter {
  constructor({container, tripModel}){
    this.mainContainer = container;
    this.eventListComponent = new EventListView();
    this.points = [...tripModel.getPoints()];
    this.destinations = [...tripModel.getDestinations()];
    this.offers = [...tripModel.getOffers()];
  }

  init() {
    render(new SortView(), this.mainContainer);
    // render(new FormAddView(), this.mainContainer);
    render(new FormEditView({
      points: this.points[3],
      destinations: this.destinations,
      offers: this.offers,
    }), this.mainContainer);
    render(this.eventListComponent, this.mainContainer);

    for(let i = 0; i < EVENT_COUNT; i++) {
      render(new EventItemView(
        {
          points: this.points[i],
          destinations: this.destinations,
          offers: this.offers,
        }
      ),
      this.eventListComponent.getElement()
      );
    }
  }
}
