import { IBook } from '../Model/book';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ModalComponent } from "ng2-bs3-modal/components/modal";
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ObserverService } from "../Services/observer.service";
import { Global } from "../Shared/global";
import { LeadContact } from "../Model/State/leadContact";

@Component({
    selector: 'leadContact-component',
    templateUrl: Global.TEMPLATE_LOCATION + 'leadContact.template.html'
})

export class LeadContactComponent implements OnInit, OnDestroy {
    @ViewChild('modal') modal: ModalComponent;
    contacts: LeadContact[];
    leadContactFrm: FormGroup;
    subscription: Subscription;
    item: number;

    constructor(private fb: FormBuilder, private _stateService: ObserverService<number>) {
        this.contacts = [
            {
                Id: 0,
                Name: 'j wall',
                Role: 'Dev master',
                Email: 'Dev@dev.com',
                AdditionalInfo: 'Lulz.inc',
                Fax: '8765309',
                Phone: '40283029389'
            },
            {
                Id: 1,
                Name: 'ben wall',
                Role: 'scum master',
                Email: 'scum@dev.com',
                AdditionalInfo: 'Lulz.inc',
                Fax: '8765309',
                Phone: '40283029389'
            }
        ]
        this.contacts.length;

    }

    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this.leadContactFrm = this.fb.group({
            Id: [''],
            FirstName: ['', Validators.required],
            LastName: ['']
        });

        this.subscription = this._stateService.sourceItem$.subscribe(item => {
            console.log(item);
            this.item = item;
        });
    }
}