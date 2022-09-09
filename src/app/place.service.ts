import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'; // verwaltung observable
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  place = "";
  options = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
  private stringSource = new Subject<string>()
  // stream auf den wir hören können:
  dataString$ = this.stringSource.asObservable()
  constructor(private http: HttpClient) {   // http obj folgt klasse HttpClient.
  }

  addPlace(place: string) {
    this.place = place;
    this.stringSource.next(place); // weitergabe mit next - wie setter func
    console.log(this.place)
    return this.place
  }

  getWeather(place: string) {
     this.fetchWeatherData(place)
     .subscribe(  data => console.log(data) )
  }

  fetchWeatherData(place: string): Observable<any> {  // liefert observable zurück -> art promise
    return this.http.post<any>('http://localhost:8080/getweather', { city: place }, this.options
    )
  }
}
