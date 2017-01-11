import { Component } from '@angular/core';

@Component({
	selector: 'main-container',
	template: `
		<div class='main-container'>
			<app-bar></app-bar>
			<main>
				<h3>Hello World! Welcome to AngularJS</h3>
				<router-outlet></router-outlet>
			</main>
		</div>
	`
})
export class Main {};