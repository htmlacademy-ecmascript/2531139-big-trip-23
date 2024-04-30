import { render } from '../render';
import EventListView from '../view/event-list-view';
import SortView from '../view/sort-view';
import FormAddView from '../view/form-add-view';

export default class Presenter {
  constructor({container}){
    this.container = container;
  }

  init() {
    render(new SortView(), this.container);
    render(new FormAddView(), this.container);
    render(new EventListView(),this.container);
  }
}
