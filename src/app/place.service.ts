import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'; // verwaltung observable
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrentWeather } from './CurrentWeather';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  place = "";
  options = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
  private stringSource = new Subject<string>()
  // stream auf den wir hören können:
  dataString$ = this.stringSource.asObservable()

  private weatherDataSource = new Subject<any>();
  weatherObject$ = this.weatherDataSource.asObservable();
  currentWeatherResult:CurrentWeather = {
      description: "",
      feelslike: 0,
      pressure: 0,
      temp: 0,
      wind: 0,
  }

  constructor(private http: HttpClient){}

  // zwei Varianten: 
  // 1.) in subscribe im Service direkt überschreiben. sinnvoll bei einem globalen Objekten.
  // 2.) Observable erstellt und subscribe in der Componente. sinnvoll wenn die daten von mehren componenten unterschiedlich
  // verwendet werden.
  // observable kann wie ein useeffect verwendet werden um eine func zu starten.

  getWeather(place: string) {
    try {
      this.fetchWeatherData(place)
      .subscribe(  data => {
      this.weatherDataSource.next(data); // weiterreichen im Stream durch next.

        // this.currentWeatherResult = {
        //   description: data.result.weather[0].description,
        //   feelslike: data.result.main.feels_like,
        //   pressure: data.result.main.pressure,
        //   temp: data.result.main.temp,
        //   wind: data.result.wind.speed
        //   }
        // console.log(this.currentWeatherResult)
      })
    }
      catch (error) {
        console.error(error);
      }
    }
  
// get route wäre auch möglich (und einfacher) gewesen mit variable city in url
  fetchWeatherData(place: string): Observable<any> {  // liefert observable zurück -> art promise
    return this.http.post<any>('http://localhost:8080/getweather', { city: place }, this.options
    )
  }
}
