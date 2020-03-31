import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  url = 'https://intourist.ru/search/api/currencyrate/15/';
  date = new Date();
  newDate;
  year;
  month;
  monthToString;
  day;
  dayToString;

  constructor(
    private http: HttpClient,
  ) {
    // get date for request
    this.year = this.date.getUTCFullYear().toString();
    this.month = (this.date.getUTCMonth() + 1);
    this.day = this.date.getUTCDate();

    if (this.day < 10) {
      this.dayToString = '0' + this.day;
    } else {
      this.dayToString = '' + this.day;
    }

    if (this.month < 10) {
      this.monthToString = '0' + this.month;
    } else {
      this.monthToString = '' + this.month;
    }

    this.newDate = this.year + '-' + this.monthToString + '-' + this.dayToString;
  }

  getRates() {
    return this.http.get(this.url + this.newDate);
  }
}
