import { Routes } from '@angular/router';
import { HomeContainerComponent } from './features/home/containers/home-container/home-container.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeContainerComponent,
    data: {
      caption: 'Home',
    }
  },
  {
    path: 'dictionaries',
    loadChildren: () => import('./features/dictionaries/dictionary.routes'),
    data: {
      caption: 'Dictionaries',
    }
  },
];
