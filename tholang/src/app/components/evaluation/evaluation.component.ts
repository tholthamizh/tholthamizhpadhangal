import {
	Component,
	OnInit, 
	Input, Output,
	OnChanges, SimpleChange, ViewChild 
}
from '@angular/core';
import {VerifyChoiceComponent} from '../verifychoice/verifychoice.component';
import {VerifyTextComponent} from '../verifytext/verifytext.component';


@ Component({
	selector : 'evaluation',
	templateUrl : './app/components/evaluation/evaluation.template.html',
	directives: [VerifyChoiceComponent, VerifyTextComponent] 
})

export class EvaluationComponent extends OnInit implements OnChanges{
	@Input()
	questions:any;
	
	@ViewChild(VerifyTextComponent)
	private verifyTextComponent : VerifyTextComponent;
	
	@ViewChild(VerifyChoiceComponent)
	private verifyChoiceComponent : VerifyChoiceComponent;

	selectedQuestion: any;

	ngOnInit(){
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		for (let propName in changes) {
      		if(propName === "questions"){
      			this.selectRandom();
      		}
    	}
  	}
 
  	selectRandom(){
		if(this.questions.length === 0) return;
		
		if(this.questions.length === 1) {
			this.selectedQuestion = this.questions[0]; 
			return;
		};
		
		
		var randIndex = Math.floor(Math.random() * this.questions.length);
		while(this.isSameQuestion(this.questions[randIndex])){
			randIndex = Math.floor(Math.random() * this.questions.length);
		}
  		
		this.selectedQuestion = this.questions[randIndex]; 
  	}
	
	clearAnswer(){	
		this.verifyTextComponent && this.verifyTextComponent.clearAnswer();
		this.verifyChoiceComponent && this.verifyChoiceComponent.clearAnswer();
	}
	
	isSameQuestion(question){
		var isSame = JSON.stringify(question) === JSON.stringify(this.selectedQuestion);
		return isSame;
	}
	
	onComplete(){
		setTimeout(() => {
			this.clearAnswer();
			this.selectRandom();
		}, 1500);
	}
}