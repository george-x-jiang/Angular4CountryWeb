import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountriesComponent } from './all-countries.component';
import { CountryService } from '../../services/country.service';
import { HttpModule } from '@angular/http';

describe('AllCountriesComponent', () => {
  let component: AllCountriesComponent;
  let fixture: ComponentFixture<AllCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      declarations: [
        AllCountriesComponent
      ],
      providers: [
        CountryService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
