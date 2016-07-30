import { provideRouter, RouterConfig }  from '@angular/router';
import { WordlistComponent } from './wordlist.component';
import { RandomWordComponent } from './random-word.component';
import { LessonsComponent } from './components/lessons/lesson.component';


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
    path: 'lessons',
    component: LessonsComponent
  },
  {
    path: '',
    redirectTo: '/lessons'    
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];