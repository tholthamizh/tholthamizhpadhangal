import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordListType } from './WordListType';
import {WordsService} from './words.service';
import {GridList} from '../gridlist/gridlist.component';
	 

@Component({
  selector: 'words', 
  templateUrl:'./app/components/words/words.component.html',
  directives: [GridList],
  styleUrls: ['./app/components/words/words.css']
})

export class WordsComponent extends OnInit{
  constructor(private wordsService: WordsService) 
  {
  	super();
  }
  
  wordList: String[] = [];
  words: WordListType[] = [];
  count = 0;
  selectedWord = '';
  desc='';
  
  ngOnInit(){
    this.wordsService.getWordList().subscribe(
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
  	this.wordsService.getWordDesc(word).subscribe(
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