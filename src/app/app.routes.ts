import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'introduce',
    loadChildren: () =>
      import('./features/introduce/introduce.routes').then((m) => m.routes),
  },
];
