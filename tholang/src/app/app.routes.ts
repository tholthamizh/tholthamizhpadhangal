import { provideRouter, RouterConfig }  from '@angular/router';
import { WordsComponent } from './components/words/words.component';
import { RandomWordComponent } from './random-word.component';
import { LessonsComponent } from './components/lessons/lesson.component';


const routes: RouterConfig = [
  
  {
    path: 'words',
    component: WordsComponent
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
    redirectTo: '/words'    
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];