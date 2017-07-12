import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { UserService } from '../Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { ChildComponent } from './child.component';
import { EventEmitter } from "events";
import { DropdownValue } from "../Model/DropDownValue";
import { ObserverService } from "../Services/observer.service";
import { State } from "../Model/State";


@Component({
    selector: 'state-component',
    templateUrl: Global.TEMPLATE_LOCATION + 'state.template.html'
})

export class StateComponent implements OnInit {
    item: number;
    constructor(private _stateService: ObserverService<number>) { }

 
    selectedValue: DropdownValue<number> = new DropdownValue(1, 'Virginia');

    //need service to get all states here
    values = [
        new DropdownValue(1, 'Virginia'),
        new DropdownValue(2, 'Maryland'),
        new DropdownValue(3, 'Kansas'),
        new DropdownValue(4, 'California')
    ];


    onChange(deviceValue: any) {
        console.log(deviceValue);
        this._stateService.changeState(deviceValue);
    }

    ngOnInit(): void {
    
    }
}

