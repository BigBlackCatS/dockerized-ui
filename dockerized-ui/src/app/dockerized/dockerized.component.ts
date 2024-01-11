import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../services/weather-forecast-service';
import { IWeatherForecast } from '../models/weather-forecast';

@Component({
  selector: 'app-dockerized',
  templateUrl: './dockerized.component.html',
  styleUrls: ['./dockerized.component.css']
})
export class DockerizedComponent implements OnInit {

  public weatherForecasts: Array<IWeatherForecast> = [];

  constructor(
    private _weatherForecastService: WeatherForecastService
  ) { }

  ngOnInit(): void {
    this._weatherForecastService.getWeatherForecast()
      .subscribe(wfs => {
        wfs.forEach(element => {
          console.log(element);
        });

        this.weatherForecasts = wfs;
      });
  }
}
