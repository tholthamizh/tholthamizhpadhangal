import { Component, Input, OnInit, OnChanges, Output, EventEmitter, SimpleChange} from '@angular/core';

@Component({
	selector: 'verify-choice',
	templateUrl: './app/components/verifychoice/verifychoice.component.html'
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
	onComplete = new EventEmitter();

	answerSelected(selAns){
		if(selAns === this.answer){
			this.status = true;
			this.onComplete.emit(true);

		}else{
			this.status = false;
		}
		this.currentAnswer = selAns;
	}
	
	clearAnswer(){
		this.currentAnswer = "";
	}
}