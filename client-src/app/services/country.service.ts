import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class CountryService {

  private readonly COUNTRY_SERVICE_URL = '/country';
  // private readonly COUNTRY_SERVICE_URL = 'http://services.groupkt.com/country';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    // example header (not necessary)
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    // create the request, store the `Observable` for subsequent subscribers
    const observable = this.http.get(this.COUNTRY_SERVICE_URL + '/get/all')
      .pipe(
        map(res => this.extractData(res)),
        catchError(err => this.handleError(err))
      );

    return observable;
  }

  searchByAlpha3Code(code: string): Observable<any> {
    // example header (not necessary)
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    // create the request, store the `Observable` for subsequent subscribers
    const observable = this.http.get(this.COUNTRY_SERVICE_URL + '/get/iso3code/' + code)
      .pipe(
        map(res => this.extractData(res)),
        catchError(err => this.handleError(err))
      );

    return observable;
  }

  searchByText(text: string): Observable<any> {
    // example header (not necessary)
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    // create the request, store the `Observable` for subsequent subscribers
    const observable = this.http.get(this.COUNTRY_SERVICE_URL + '/search?text=' + text)
      .pipe(
        map(res => this.extractData(res)),
        catchError(err => this.handleError(err))
      );

    return observable;
  }

  private extractData(res: any) {
    // if the result field is absent or does not have a value
    if (res.RestResponse.result == null) {
      throw(res.RestResponse.messages && res.RestResponse.messages.length > 1 && res.RestResponse.messages[1]
        || 'Unknown error');
    }

    return res.RestResponse.result;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return throwError(errMsg);
  }

}
