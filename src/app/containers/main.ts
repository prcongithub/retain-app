import { Component } from '@angular/core';

@Component({
	selector: 'main-container',
	template: `
		<div class='main-container'>
			<app-bar></app-bar>
			<main>
				<h3>Hello World! Welcome to AngularJS</h3>
				<notes-container></notes-container>
			</main>
		</div>
	`
})
export class Main {};