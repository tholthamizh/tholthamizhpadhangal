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
	
//	@ViewChild(VerifyTextComponent)
//	private verifyTextComponent : VerifyTextComponent;
	
//	@ViewChild(VerifyChoiceComponent)
//	private verifyChoiceComponent : VerifyChoiceComponent;

	selectedQuestion: any;

	ngOnInit(){
		console.log("Hello Init");
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
			console.log(this.selectedQuestion);
			return;
		};
		
		
		var randIndex = Math.floor(Math.random() * this.questions.length);
		while(this.isSameQuestion(this.questions[randIndex])){
			console.log(randIndex);
			randIndex = Math.floor(Math.random() * this.questions.length);
		}
  		
		this.selectedQuestion = this.questions[randIndex]; 
		console.log(this.selectedQuestion);
  	}
	
	isSameQuestion(question){
		var isSame = JSON.stringify(question) === JSON.stringify(this.selectedQuestion);
		//console.log(isSame);
		return isSame;
	}
	
	onComplete(){
		console.log("Done" + this);
		setTimeout(() => {
			
			//this.verifyTextComponent.clearAnswer();
			//this.verifyChoiceComponent.clearAnswer();
			
			console.log("nextQuestion");
			this.selectRandom();
		}, 2000);
	}
}