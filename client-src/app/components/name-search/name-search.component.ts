import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.css']
})
export class NameSearchComponent implements OnInit {

  selectedCountry = null;
  errorMsg: string;
  searchForm: FormGroup;
  resultCountries = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'countryName': new FormControl('', [
      ])
    });

    this.searchForm.get(['countryName']).valueChanges
      .debounceTime(300)
      // ignore if next search term is same as previous
      .distinctUntilChanged()
      // switch to new observable each time
      .switchMap(text => text ?
        // return the http search observable
        this.countryService.searchByText(text)
        // or the observable of null value if no search text
        : Observable.of<object[]>(null))
      .subscribe(
        results => {
          this.resultCountries = results;
          this.selectedCountry = null;
          this.errorMsg = null;
          // convert empty list to an error message
          if (results && results.length === 0) {
            this.errorMsg = 'No matching country found';
          }
        },

        errorMsg => {
          this.errorMsg = errorMsg;
        }
      );
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
    this.resultCountries = null;
 }

}
