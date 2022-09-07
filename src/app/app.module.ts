import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { WeatherResultComponent } from './weather-result/weather-result.component';
import { HeaderComponent } from './header/header.component';
import { WeatherForecastPageComponent } from './weather-forecast-page/weather-forecast-page.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    WeatherResultComponent,
    HeaderComponent,
    WeatherForecastPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
