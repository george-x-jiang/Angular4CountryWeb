import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-code-search',
  templateUrl: './code-search.component.html',
  styleUrls: ['./code-search.component.css']
})
export class CodeSearchComponent implements OnInit {

  resultCountry = null;
  errorMsg: string;

  constructor(private countryService: CountryService) { }

  ngOnInit() { }

  search(code: string) {
    this.resultCountry = null;
    this.errorMsg = '';

    this.countryService.searchByAlpha3Code(code)
    .subscribe(
      resultCountry => {
        this.resultCountry = resultCountry;
      },
      errorMsg => {
        this.errorMsg = errorMsg;
      });
  }

}
