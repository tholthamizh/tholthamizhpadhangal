import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordListType } from './word-list-type';
import {WordService} from './words.service';
import {GridList} from './gridlist/gridlist.component';
	 

@Component({
  selector: 'wordlist', 
  template:`
  	<div class="row">
  		<div class="col-md-10">
	  		<h4>{{selectedWord}}</h4>
	  		<p [innerHTML]="desc"></p>
	  	</div>
  	</div>
  	<gridlist [title]="'பதங்கள்'" [inList]="wordList" [columns]="6" (onselect)="getWordDetail($event)">

    </gridlist>

  `,
  directives: [GridList]
})

export class WordlistComponent extends OnInit{
  constructor(private wordService: WordService) 
  {
  	super();
  }
  
  wordList: String[] = [];
  words: WordListType[] = [];
  count = 0;
  selectedWord = '';
  desc='';
  
  ngOnInit(){
    this.wordService.getWordList().subscribe(
    	data => {
    		this.wordList = data.words;
    		this.convertWordList();
    	},
    	err => {
    		console.error(err);
    	}
    );
          	
  }

  randomSel(){
  	var item = this.wordList[Math.floor(Math.random()*this.wordList.length)];
  	this.getWordDetail(item);
  }
  
  getWordDetail(word){
  	this.wordService.getWordDesc(word).subscribe(
  		data => {
  			this.selectedWord = word;
  			this.desc = data.meaning;
  		},
  		err => {
  			console.error(err); 
  		}
  	);	
  }

  convertWordList(){
  	this.words=[];
  	var index = 0;
  	var currentArr = [];  	
  	while(index<this.wordList.length){
  		if(currentArr.length<6){
  			currentArr.push(this.wordList[index]);
  		}else{
  			this.words.push({words: currentArr});
  			currentArr = [];
  			currentArr.push(this.wordList[index]);
  		}
  		index++; 
  	}
  	this.words.push({words: currentArr});
  }

  shuffle(){
  	  var currentIndex = this.wordList.length, temporaryValue, randomIndex;

  		// While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = this.wordList[currentIndex];
	    this.wordList[currentIndex] = this.wordList[randomIndex];
	    this.wordList[randomIndex] = temporaryValue;
	  }
	  this.convertWordList();
  }
}