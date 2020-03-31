import { Component, OnInit } from '@angular/core';

import { ExchangeRatesService } from '../exchange-rates.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit {

  rates;

  constructor(
    private exchangeRates: ExchangeRatesService,
  ) { }

  ngOnInit(): void {
    this.rates = this.exchangeRates.getRates()
      .subscribe(res => {
        this.rates = res;
      });
  }

}
