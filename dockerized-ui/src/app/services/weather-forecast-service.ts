import { HttpClient } from "@angular/common/http";
import { IWeatherForecast } from "../models/weather-forecast";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class WeatherForecastService {
    private _apiRoute = "http://localhost:5096";

    constructor(private _httpClient: HttpClient) {

    }

    getWeatherForecast():Observable<Array<IWeatherForecast>> {
        return this._httpClient.get<Array<IWeatherForecast>>(`${this._apiRoute}/WeatherForecast`)
    }
}