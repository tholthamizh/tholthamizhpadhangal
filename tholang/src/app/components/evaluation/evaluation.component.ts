import {
	Component,
	OnInit, 
	Input, Output,
	OnChanges, SimpleChange
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

	selectedQuestion:any; 

	questionType="unknown";

	ngOnInit(){
		console.log("Hello Init");
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		for (let propName in changes) {
      		if(propName === "questions"){
      			this.selectRandom();
      			if(this.selectedQuestion){
      				this.questionType = this.selectedQuestion.questionType;
      			}
      		}
    	}
  	}



  	selectRandom(){
  		var randIndex = Math.floor(Math.random() * this.questions.length);
		this.selectedQuestion = this.questions[randIndex]; 
  	}
}