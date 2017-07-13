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
  
    item: number;
    msg: any;
    selectedState: State = new State();
    states: State[];
    selectedStateFlagUri: string;

    constructor(private _observerService: ObserverService<number>, private _stateService: StateService) { }
 
    selectedValue: DropdownValue<number> = new DropdownValue(1, 'Virginia');

    //need service to get all states here
    values:Array<DropdownValue<number>> = [];

    LoadStates(): void {
        this._stateService.get(Global.BASE_STATE_ENDPOINT)
            .subscribe(states => {
                this.bindStateDropDown(states);
                this.selectedStateFlagUri = "app/Assets/Images/" + states[0].Abbreviation + ".png";
                this.selectedState = states[0];
                this.states = states;
            },
            error => this.msg = <any>error);
    }

    bindStateDropDown(States: State[]) {
        for (var i = 0; i < States.length; i++) {
            this.values.push(new DropdownValue(States[i].Id, States[i].Name))
       }
    }

    onChange(deviceValue: any) {

        this.selectedState = this.states.filter(x => x.Id == deviceValue)[0]
        this.selectedStateFlagUri = "app/Assets/Images/" + this.states.filter(x => x.Id == deviceValue)[0].Abbreviation + ".png";
        this._observerService.changeState(deviceValue);
    }

    ngOnInit(): void {
        this.LoadStates();
    }

    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
}

