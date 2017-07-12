import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ObserverService<T> {

    private _source = new BehaviorSubject<T>(null);
    sourceItem$ = this._source.asObservable();
  
    changeState(item: T) {
        this._source.next(item);
    }
}