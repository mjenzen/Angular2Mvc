import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { State } from "../Model/State/state";

@Injectable()
export class StateService {
    constructor(private _http: Http) { }

    get(url: string): Observable<State[]> {
        return this._http.get(url)
            .map((response: Response) => <State[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}