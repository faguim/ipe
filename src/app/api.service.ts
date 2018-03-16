import { Injectable } from '@angular/core';

import { Http, Response, JsonpModule, Jsonp, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { environment } from './../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private jsonp: Jsonp, private http: Http) { }

  // API: GET /case/id
  public getStudent(id): Observable<any> {
    let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
    return this.http.get(API_URL + '/student/' + id).map(res => {
      return res.json();
    });
  }

  public save(questionnare: any): Observable<Response> {
    return this.http.post(API_URL + '/questionnare/save', JSON.stringify(questionnare)).map(res => { 
      return res.json(); 
    });
  }
}
