import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  public url: string = 'https://api.exchangeratesapi.io/latest?base=USD';

  constructor(
    private http: HttpClient,
  ) {  }

  getRates() {
    return this.http.get(this.url);
  }
}
