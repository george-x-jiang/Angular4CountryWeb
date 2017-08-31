import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

@Injectable()
export class CountryService {

  // private readonly COUNTRY_SERVICE_URL = '/api/country';
  private readonly COUNTRY_SERVICE_URL = 'http://services.groupkt.com/country';

  constructor(private http: Http) { }

  getAllCountries(): Observable<any> {
    // example header (not necessary)
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    // create the request, store the `Observable` for subsequent subscribers
    const observable = this.http.get(this.COUNTRY_SERVICE_URL + '/get/all')
      .map(this.extractData)
      .catch(this.handleError);

    return observable;
  }

  searchByAlpha3Code(code: string): Observable<any> {
    // example header (not necessary)
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    // create the request, store the `Observable` for subsequent subscribers
    const observable = this.http.get(this.COUNTRY_SERVICE_URL + '/get/iso3code/' + code)
      .map(this.extractData)
      .catch(this.handleError);

    return observable;
  }

  searchByText(text: string): Observable<any> {
    // example header (not necessary)
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    // create the request, store the `Observable` for subsequent subscribers
    const observable = this.http.get(this.COUNTRY_SERVICE_URL + '/search?text=' + text)
      .map(this.extractData)
      .catch(this.handleError);

    return observable;
  }

  private extractData(res: Response) {
    const body = res.json();
    // if the result field is absent or does not have a value
    if (body.RestResponse.result == null) {
      throw(body.RestResponse.messages && body.RestResponse.messages.length > 1 && body.RestResponse.messages[1]
        || 'Unknown error');
    }

    return body.RestResponse.result;
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
