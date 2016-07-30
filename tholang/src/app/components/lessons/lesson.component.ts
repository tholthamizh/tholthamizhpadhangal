import {
	Component,
	OnInit
}
from '@angular/core';
import {
	LessonsService
}
from './lessons.service';
import {GridList} from '../../gridlist/gridlist.component';



 @ Component({
	selector : 'lessons',
	templateUrl : './app/components/lessons/lessons.template.html',
	directives: [GridList]
})

export class LessonsComponent extends OnInit {

	constructor(private lessonsService : LessonsService) {
		super();
	}

	lessons : String[] = [];

	ngOnInit() {
		this.lessonsService.getLessonsList().subscribe(
			data => {
				this.lessons = data.lessons;
			},
			err => {
				console.error(err);
			});
	}

	itemSelected(lessonName){
		console.log(lessonName);
	}
}
