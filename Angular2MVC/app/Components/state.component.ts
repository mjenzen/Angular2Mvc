import { Component, OnInit, ViewChild, Input, Output, OnDestroy } from '@angular/core';
import { UserService } from '../Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { EventEmitter } from "events";
import { DropdownValue } from "../Model/dropDownValue";
import { ObserverService } from "../Services/observer.service";
import { StateService } from "../Services/state.service";
import { State } from "../Model/State/state";


@Component({
    selector: 'state-component',
    templateUrl: Global.TEMPLATE_LOCATION + 'state.template.html'
})

export class StateComponent implements OnInit, OnDestroy {
  
    msg: any;
    selectedState: State = new State();
    states: State[];

    constructor(private _observerService: ObserverService<number>, private _stateService: StateService) { }

    LoadStates(): void {
        this._stateService.get(Global.BASE_STATE_ENDPOINT)
            .subscribe(states => {
                this.selectedState = states[0];
                this.states = states;
                this._observerService.changeState(states[0].Id);
            },
            error => this.msg = <any>error);
    }

    onChange(id: any) {
        this.selectedState = this.states.filter(x => x.Id == id)[0];
        this._observerService.changeState(id);
    }

    ngOnInit(): void {
        this.LoadStates();
    }

    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
}

