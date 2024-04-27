import { render } from "../render";
import EventItem from "../view/event-item"
import SortView from "../view/sort-view"
import EventList from "../view/event-list"
import FormAddView from "../view/form-add-view"

export default class Presenter {
  constructor({container}){
    this.container = container;
  }
  init() {
    render(new SortView(), this.container);
    render(new EventList(), this.container);
    render(new FormAddView(), this.container);
    for (let i = 0; i < 3; i++) {
      render(new EventItem(), this.container);
  }
    render(new EventList(), this.container);
  }
}
