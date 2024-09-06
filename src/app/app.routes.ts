import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { APP_ROUTES } from './constants/routes';
import { FirstMethodPageComponent } from './pages/first-method-page/first-method-page.component';
import { SecondMethodPageComponent } from './pages/second-method-page/second-method-page.component';
import { ThirdMethodPageComponent } from './pages/third-method-page/third-method-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: APP_ROUTES.reactiveForms,
    loadComponent: () => import('./pages/first-method-page/first-method-page.component')
      .then((m) => m.FirstMethodPageComponent),
  },
  {
    path: APP_ROUTES.ngModel,
    loadComponent: () => import('./pages/second-method-page/second-method-page.component')
      .then((m) => m.SecondMethodPageComponent),
  },
  {
    path: APP_ROUTES.angularMaterial,
    loadComponent: () => import('./pages/third-method-page/third-method-page.component')
      .then((m) => m.ThirdMethodPageComponent),
  },
];