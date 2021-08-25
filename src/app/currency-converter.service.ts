import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  constructor(private http: HttpClient) { }

  getCurrencies(){
    let endpoint = environment.apiUrl + '/currencies'
    let reqOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get(endpoint, reqOptions)
  }

  getConvertedAmount(amount:number, from:string, to:string): Observable<any> {
    let endpoint = environment.apiUrl + '/getamount';

    let params = new HttpParams().set('amount', String(amount)).set("from_currency", from).set("to_currency", to)
    
    let reqOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
      params: params
    };

    return this.http.get(endpoint, reqOptions)
  }
}
