import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  place = "";

  constructor() { }


  addPlace(place:string) {
    this.place = place;
    console.log(this.place)
    return this.place
  }
}
