import { 
	Component, 
	Output,
	EventEmitter
} from '@angular/core';

@Component({
	selector: 'note-creator',
	styles: [`
		.note-creator {
			padding: 20px;
			background-color: white;
			border-radius: 3px;
		}
		.title {
			font-weight: bold;
			color: rgba(0,0,0,0.8);
		}
		.full {
			height: 100px;
		}
	`],
	template: `
		<div class="note-creator shadow-2" [ngStyle]="{ 'background-color': newNote.color }">
	      <form class="row" (submit)="onCreateNote()">
	        <input
	          type="text"
	          [(ngModel)]="newNote.title"
	          name="newNoteTitle"
	          placeholder="Title"
	          class="col-xs-10 title"
	           *ngIf="fullForm"
	        >
	        <input
	          type="text"
	          [(ngModel)]="newNote.value"
	          name="newNoteValue"
	          placeholder="Take a note..."
	          class="col-xs-10"
	          (focus)="toggle(true)"
	        >
	        <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
	          <div class='col-xs-3'>
	          	<color-picker 
	          		[colors]="colors"
	          		(selected)="setColor($event)">
          		</color-picker>
	          </div>	
	          <button
	            type="submit"
	            class="btn-light"
	           >
	            Done
	          </button>
	          <!--<pre>{{ newNote | json }}</pre>-->
	        </div>
	      </form>
	    </div>		
	`
})
export class NoteCreator {
	colors: string[] = ['#B19CD9','#ff0000','#77DD77'];
	newNote = {
		title: "",
		value: "",
		color: 'white'
	}

	fullForm: boolean = false;

	@Output() createNote = new EventEmitter();

	onCreateNote() {
		const { title, value, color } = this.newNote;

		if(title && value) {
			this.createNote.next(this.newNote);
			this.reset();
			this.toggle(false);
		}
	}

	setColor(color: string) {
		this.newNote.color = color;
	}

	reset() {
		this.newNote = {
			title: '',
			value: '',
			color: 'white'
		}
	}

	toggle(value: boolean) {
		this.fullForm = value;
	}
};