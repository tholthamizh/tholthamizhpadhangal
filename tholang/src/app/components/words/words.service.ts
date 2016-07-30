import { WordListType } from './WordListType';
import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';

@Injectable()
export class WordsService{
	constructor(private http: Http) { }

	getWordList(){
		return this.http.get('api/words').map(this.toJson);		 
	}	

	getWordDesc(word){
		return this.http.get('api/words/'+encodeURI(encodeURI(word))).map(this.toJson);
	}

	toJson(x){
		return x.json();
	}
}

