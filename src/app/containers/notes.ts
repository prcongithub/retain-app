import { Component } from '@angular/core';

@Component({
	selector: 'notes-container',
	styles: [`
		.notes {
		  padding-top: 50px;
		}
		.creator {
		  margin-bottom: 40px; 
		}
	`],
	template: `
		<div class="row center-xs notes">
	      <div class="col-xs-6 creator">
	        <note-creator (createNote)="onCreateNote($event)"></note-creator>
	      </div>
	      <div class="notes col-xs-8">
	        <div class="row between-xs">
	          <note-card
	            class="col-xs-4"
	            [note]="note"
	            *ngFor="let note of notes; let i = index;"
	            (checked)="onNoteChecked(i)"
	          >
	          </note-card>
	        </div>
	      </div>
	    </div>
	`
})
export class NotesContainer {
	notes = [
		{ title: "Note 1", value: "Blue Note", color: 'lightblue' },
		{ title: "Note 2", value: "Red Note", color: 'red' },
		{ title: "Note 3", value: "Orange Note", color: 'orange' }
	];

	onNoteChecked(i: number) {
		this.notes.splice(i,1);
	}

	onCreateNote(note) {
		this.notes.push(note);
	}
};