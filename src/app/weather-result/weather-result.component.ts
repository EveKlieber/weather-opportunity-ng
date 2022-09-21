import { Component, OnInit } from '@angular/core';
import { CurrentWeather} from '../CurrentWeather'
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.scss']
})
export class WeatherResultComponent implements OnInit {

weatherResult: any


  constructor(public placeservice:PlaceService) { }

  ngOnInit(): void {
    this.placeservice.weatherObject$.subscribe(data => {
       this.weatherResult = {
          description: data.result.weather[0].description,
          feelslike: data.result.main.feels_like,
          pressure: data.result.main.pressure,
          temp: data.result.main.temp,
          wind: data.result.wind.speed
          }
          console.log(this.weatherResult)
    });
  }
}
