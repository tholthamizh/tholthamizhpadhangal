import { WordListType } from './word-list-type';
import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';

var WORDS:String[]  = ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]

@Injectable()
export class WordService{
	constructor(private http: Http) { }

	getWordList(){
		return this.http.get('data/words.json').map(this.somefun);		 
	}	

	getWordDesc(word){
		return this.http.get('data/words/'+word+'.json').map(this.somefun);
	}

	somefun(x){
		return x.json();
	}
}

