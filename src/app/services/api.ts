import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {
	Headers,
	Http,
	Response
} from '@angular/http';

import 'rxjs/Rx';

import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
	headers: Headers = new Headers({
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	});

	api_url: string = 'http://localhost:3500';

	constructor(private http: Http) {

	}

	private checkForError(resp: Response): Response {
		if(resp.status >= 200 && resp.status < 300) {
			return resp;
		} else {
			const error = new Error(resp.statusText);
			error['response'] = resp;
			console.log(error);
			throw(error);
		}
	}

	private getJson(resp: Response) {
		return resp.json();
	}

	get(path: string): Observable<any> {
		return this.http.get(`${this.api_url}${path}`,this.headers)
		.map(this.checkForError)
		.catch(error => Observable.throw(error))
		.map(this.getJson);
	}

	post(path: string, body): Observable<any> {
		return this.http.post(
			`${this.api_url}${path}`,
			JSON.stringify(body),
			{ headers: this.headers }
		)
		.map(this.checkForError)
		.catch(error => Observable.throw(error))
		.map(this.getJson);
	}

	delete(path: string): Observable<any> {
		return this.http.delete(`${this.api_url}${path}`,this.headers)
		.map(this.checkForError)
		.catch(error => Observable.throw(error))
		.map(this.getJson);
	}

}