import { Routes } from '@angular/router';
import { IntroduceComponent } from './introduce.component';
import { SelfComponent } from './self/self.component';

export const routes: Routes = [
  {
    path: '',
    component: IntroduceComponent,
    children: [
      {
        path: '',
        redirectTo: 'self',
        pathMatch: 'full',
      },
      {
        path: 'self',
        component: SelfComponent,
      },
    ],
  },
];
