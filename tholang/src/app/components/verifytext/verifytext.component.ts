import { Component, Input, OnInit, OnChanges, Output, EventEmitter, SimpleChange} from '@angular/core';

@Component({
	selector: 'verify-text',
	templateUrl: './app/components/verifytext/verifytext.component.html'
})

export class VerifyTextComponent {
	@Input()
	question:String;

	@Input()
	answer:String;

	currentAnswer:String;

	status:Boolean = false;

	@Output()
	onComplete = new EventEmitter();

	answerChange(ans:String){
		if(ans===this.answer){
			this.status = true;
			this.onComplete.emit(true);
		}else{
			this.status = false;
		}
	}

	showAnswer(){
		this.currentAnswer = this.answer;
		this.status = true;
		this.onComplete.emit(false);
	}

}