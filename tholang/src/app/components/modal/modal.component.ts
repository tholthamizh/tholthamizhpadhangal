import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter
} 	from '@angular/core';

@Component({
	selector : 'modal',
	templateUrl : './app/components/modal/modal.component.html',
	styleUrls: ['./app/components/modal/modal.css']
})

export class Modal{
	@Input()
	header = "someHeader";

	@Input()
	content = "SomeContent";

	@Input()
	showModal = true;

	@Output()
	onClose = new EventEmitter();

	hide(){
		this.onClose.emit(false);
	}
}