import { TranslationWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-weather-forecast-page',
  templateUrl: './weather-forecast-page.component.html',
  styleUrls: ['./weather-forecast-page.component.scss']
})
export class WeatherForecastPageComponent implements OnInit {

  locationName="";

  output = ""
  
  constructor(public placeservice:PlaceService) { 
    // this.output = placeservice.place
  }

  log(location:any) {
    console.log(location.value)
  }

  addLocation(location:string) {
    // this.placeservice.addPlace(location);
    this.placeservice.getWeather(location);
    this.locationName="";
  }

  ngOnInit(): void {
    this.placeservice.dataString$.subscribe(placeInput => this.output = placeInput) // callbike like then
  }


  onCaptureLocation(event: Event) {
    // this.questionName = event.target.value;
    // this.locationName = (<HTMLInputElement>event.target).value;  // to inform typeSript of input Element Type
    console.log(event)
  }    
}
