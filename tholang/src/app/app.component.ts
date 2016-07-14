import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { WordService } from './words.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[WordService] 
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
