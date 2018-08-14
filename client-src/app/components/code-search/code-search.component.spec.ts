import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSearchComponent } from './code-search.component';
import { CountryService } from '../../services/country.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('CodeSearchComponent', () => {
  let component: CodeSearchComponent;
  let fixture: ComponentFixture<CodeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        CodeSearchComponent
      ],
      providers: [
        CountryService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
