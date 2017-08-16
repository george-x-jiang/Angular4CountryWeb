import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  countriesList = [];
  errorMsg: string;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getAllCountries()
    .subscribe(
      countriesList => {
        this.countriesList = countriesList;
      },
      errorMsg => {
        this.errorMsg = errorMsg;
      }
    );
  }

}
