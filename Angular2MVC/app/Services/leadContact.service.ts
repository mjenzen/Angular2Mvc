
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { LeadContact } from "../Model/State/leadContact";

@Injectable()
export class LeadContactService {
    constructor(private _http: Http) { }

    get(url: string, id: string): Observable<LeadContact[]> {
        return this._http.get(url+id)
            .map((response: Response) => <LeadContact[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}


