import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DockerizedComponent } from './dockerized/dockerized.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { WeatherForecastService } from './services/weather-forecast-service';

@NgModule({
  declarations: [
    AppComponent,
    DockerizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherForecastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
