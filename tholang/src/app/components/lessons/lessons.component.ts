import {
	Component,
	OnInit
}
from '@angular/core';
import {
	LessonsService
}
from './lessons.service';

import {GridList} from '../gridlist/gridlist.component';
import {EvaluationComponent} from '../evaluation/evaluation.component';

@Component({
	selector : 'lessons',
	templateUrl : './app/components/lessons/lessons.template.html',
	styleUrls: ['./app/components/lessons/lessons.css'],
	directives: [GridList, EvaluationComponent]
})

export class LessonsComponent extends OnInit {

	constructor(private lessonsService : LessonsService) {
		super();
	}
	
	currentTab : String = "";
	currentLesson : String = "";
	lessonContent : String = "";
	lessonEvaluation : String = "";
	lessons : String[] = [];

	ngOnInit() {
		this.currentLesson = "";
		this.lessonsService.getLessonsList().subscribe(
			data => {
				this.lessons = data.lessons;
				this.lessonSelected(this.lessons[0]);
			},
			err => {
				console.error(err);
			});
	}

	lessonSelected(lessonName){
		this.currentLesson = lessonName;

		if (this.currentTab === "evaluation") {
			this.loadEvaluation();
		} else {
			this.loadContent();
		}
	}
	
	loadContent(){
		
		this.currentTab = "content";
		
		this.lessonsService.getLessonContent(this.currentLesson).subscribe(
			data => {
				this.lessonContent = data.content;
			},
			err => {
				console.error(err);
			});
	}
	
	loadEvaluation(){
		
		this.currentTab = "evaluation";
		
		this.lessonsService.getLessonEvaluation(this.currentLesson).subscribe(
			data => {
				this.lessonEvaluation = data.questions;
			},
			err => {
				console.error(err);
			});
	}
}
