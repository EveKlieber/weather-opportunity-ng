import { Component, OnInit } from '@angular/core';
import { CurrentWeather} from '../CurrentWeather'
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.scss']
})
export class WeatherResultComponent implements OnInit {

  currentWeatherResult:CurrentWeather = {
    clouds: "strong clouds",
    feelslike: 25,
    pressure: 1016,
    temp: 17,
    wind: 7.15
  }


  constructor(public placeservice:PlaceService) { }

  ngOnInit(): void {
  }

}
