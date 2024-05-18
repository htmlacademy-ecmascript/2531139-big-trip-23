import { getMockPoints } from "../mock/points";
import { getMockDestinations } from "../mock/destinations";
import { getMockOffers } from "../mock/offers";

export const EVENT_COUNT = 3;

export default class TripModel {
  constructor(){
    this.points = [];
    this.destinations = [];
    this.offers = [];
  }

  init(){
    this.points = getMockPoints();
    this.destinations = getMockDestinations();
    this.offers = getMockOffers();
  }

  getPoints(){
    return this.points
  }
  getDestinations(){
    return this.destinations
  }
  getOffers(){
    return this.offers
  }
}