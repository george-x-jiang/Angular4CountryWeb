import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCountriesComponent } from './components/all-countries/all-countries.component';
import { CodeSearchComponent } from './components/code-search/code-search.component';
import { NameSearchComponent } from './components/name-search/name-search.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllCountriesComponent
  },
  {
    path: 'bycode',
    component: CodeSearchComponent
  },
  {
    path: 'byname',
    component: NameSearchComponent
  },
  {
    path: '',
    redirectTo: '/all',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
