import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CurrencyConverterService } from '../currency-converter.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  amount: String;
  convertedAmount : number = 0;

  currencies: string[];

  constructor(
    private currencyService: CurrencyConverterService
  ) { }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(responseData => {
      this.currencies = responseData['currencies']
    })
  }

  log(x:any){
    console.log(x)
  }

  getConvertedAmount(data: any){
    this.currencyService.getConvertedAmount(data.amount, data.from, data.to).subscribe(responseData =>{
      this.convertedAmount = responseData['converted_amount']
    })
  }

}
