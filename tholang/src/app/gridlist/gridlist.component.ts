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


	displayList:String[][];

	ngOnInit(){
		this.populateDisplayList();
	}

	populateDisplayList(){
		this.displayList = [];
		var currentList = [];
		var actualList = this.inList;
		if(this.qstring!==""){
			var qs = this.qstring;
			actualList = this.inList.filter(function(oItem){
				return oItem.indexOf(qs)!==-1;
			});
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

  	qstringChanged(){
  		console.log("Changes");
  		this.populateDisplayList();
  	}

  	itemSelected(i){
  		this.onselect.emit(i);
  	}
}