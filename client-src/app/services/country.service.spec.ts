import { TestBed, inject } from '@angular/core/testing';

import { CountryService } from './country.service';
import { HttpModule } from '@angular/http';

describe('CountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        CountryService
      ]
    });
  });

  it('should be created', inject([CountryService], (service: CountryService) => {
    expect(service).toBeTruthy();
  }));
});
