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
		console.log("Loading lesson " + lessonName);
		this.currentLesson = lessonName;
		this.loadContent();
	}
	
	loadContent(){
		
		if(this.currentTab === "content") return;
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
		
		if(this.currentTab === "evaluation") return;
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
