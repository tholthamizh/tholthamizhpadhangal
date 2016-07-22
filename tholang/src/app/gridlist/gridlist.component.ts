import { Component, Input, OnInit, OnChanges, Output, EventEmitter, SimpleChange} from '@angular/core';

@Component({
	selector: 'gridlist',
	templateUrl: './app/gridlist/gridlist.component.html',
	styleUrls:['./app/gridlist/gridlist.component.css']
})

export class GridList extends OnInit implements OnChanges{
	@Input()
	title:String;

	@Input()
	inList:String[] = [];

	@Input()
	columns:number= 1;

	@Output()
	onselect = new EventEmitter();
	
	qstring = "";

	wcount = 0;


	displayList:String[][];

	ngOnInit(){
		this.populateDisplayList();
	}

	populateDisplayList(shuffle:Boolean = false){
		this.displayList = [];
		var currentList = [];
		var actualList = this.inList;
		if(this.qstring!==""){
			var qs = this.qstring;
			actualList = this.inList.filter(function(oItem){
				return oItem.indexOf(qs)!==-1;
			});
		}
		this.wcount = actualList.length;
		if(shuffle){
			actualList = this.shuffleArray(actualList);
		}
		for(let item of actualList){
			if(currentList.length < this.columns){
				currentList.push(item);
			}else{
				this.displayList.push(currentList);
				currentList = [item];
			}
		}
		this.displayList.push(currentList);
		
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		for (let propName in changes) {
      		if(propName==="inList" || propName==="columns" || propName==="qstring"){
      			this.populateDisplayList();
      		}
    	}
  	}

  	shuffleArray(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

  	qstringChanged(){
  		this.populateDisplayList();
  	}

  	itemSelected(i){
  		this.onselect.emit(i);
  	}

  	selectRandom(){
  		var actualList = this.inList;
		if(this.qstring!==""){
			var qs = this.qstring;
			actualList = this.inList.filter(function(oItem){
				return oItem.indexOf(qs)!==-1;
			});
		}
		var randIndex = Math.floor(Math.random() * actualList.length);
		this.itemSelected(actualList[randIndex]);
  	}

  	shuffleList(){
  		this.populateDisplayList(true);
  	}
}