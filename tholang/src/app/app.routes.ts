import { provideRouter, RouterConfig }  from '@angular/router';
import { WordlistComponent } from './wordlist.component';
import { RandomWordComponent } from './random-word.component';

const routes: RouterConfig = [
  
  {
    path: 'words',
    component: WordlistComponent
  },
  {
  	path: 'contact',
  	component: RandomWordComponent
  },
  {
    path: '',
    redirectTo: '/words'    
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];