import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${environment.weatherApiBaseUrl}/${cityName}`,
      {
        headers: new HttpHeaders()
          .set(
            environment.XRapidAPIHostKeyHeaderName,
            environment.XRapidAPIHostHeaderValue
          )
          .set(
            environment.XRapidAPIHostKeyHeaderName,
            environment.XRapidAPIHostKeyHeaderValue
          ),
      }
    );
  }
}
