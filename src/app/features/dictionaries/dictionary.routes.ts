import { Routes } from '@angular/router';
import { DictionariesContainerComponent } from './containers/dictionaries-container/dictionaries-container.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';

const routes: Routes = [
  {
    path: '',
    component: DictionariesContainerComponent,
  },
  {
    path: ':id',
    component: DictionaryComponent,
  },
];

export default routes;
