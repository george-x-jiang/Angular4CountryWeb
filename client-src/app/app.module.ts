import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllCountriesComponent } from './components/all-countries/all-countries.component';
import { CodeSearchComponent } from './components/code-search/code-search.component';
import { NameSearchComponent } from './components/name-search/name-search.component';
import { CountryService } from './services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllCountriesComponent,
    CodeSearchComponent,
    NameSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [ CountryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
