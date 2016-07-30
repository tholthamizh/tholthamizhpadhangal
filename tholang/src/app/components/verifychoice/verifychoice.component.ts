import { Component, Input, OnInit, OnChanges, Output, EventEmitter, SimpleChange} from '@angular/core';

@Component({
	selector: 'verify-choice',
	templateUrl: './app/verifychoice/verifychoice.component.html'
})

export class VerifyChoiceComponent{
	@Input()
	choices:String[];

	@Input()
	answer:String;

	@Input()
	question:String;

	currentAnswer:String="";

	status = false;

	@Output()
	oncomplete = new EventEmitter();

	answerSelected(selAns){
		if(selAns === this.answer){
			this.status = true;
			this.oncomplete.emit(true);

		}else{
			this.status = false;
		}
		this.currentAnswer=selAns;
	}	
}