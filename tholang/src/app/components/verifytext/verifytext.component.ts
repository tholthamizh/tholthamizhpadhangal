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

	answerChange(event, ans: String){
		
		var key = event.keyCode;
		
		var uselessKeys = [16, 17, 18];
		if(uselessKeys.indexOf(key) >= 0) return;
		
		if(ans === this.answer){
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
	
	clearAnswer(){
		this.currentAnswer = "";
	}

}