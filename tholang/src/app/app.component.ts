import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { WordsService } from './components/words/words.service';
import { LessonsService } from './components/lessons/lessons.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[WordsService, LessonsService] 
})
export class AppComponent {
  constructor(private router: Router){}

  title = 'தொல் தமிழ்ப் பதங்கள்';
  routeToWords(){
  	this.router.navigate(['/words']);
  }
  routeToRandom(){
  	this.router.navigate(['/contact']);
  }
}
