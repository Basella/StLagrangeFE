import { LandingComponent } from './../landing/landing.component';
import { MainPageComponent } from './main-page.component';
import { Routes } from '@angular/router';
export const appRoutesLazyLoad: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'home', component: LandingComponent },
      {
        path: '',
        loadChildren: () =>
          import('../landing/landing.module').then(
            (m) => m.LandingModule
          )
      },
      {
        path: 'catalog',
        loadChildren: () =>
          import('../catalog/catalog.module').then(
            (m) => m.CatalogModule
          )
      }
    ]
  }
];
