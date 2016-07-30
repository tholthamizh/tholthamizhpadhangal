import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';

@Injectable()
export class LessonsService{
	constructor(private http: Http) { }

	getLessonsList(){
		return this.http.get('api/lessons').map(this.toJson);
	}

	getLessonContent(lesson){
		return this.http.get('api/lessons/'+encodeURI(encodeURI(lesson)) + "/content").map(this.toJson);
	}

	getLessonEvaluation(lesson){
		return this.http.get('api/lessons/'+encodeURI(encodeURI(lesson)) + "/evaluation").map(this.toJson);
	}

	toJson(x){
		return x.json();
	}
}

