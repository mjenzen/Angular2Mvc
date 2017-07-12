import { IBook } from '../Model/book';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ModalComponent } from "ng2-bs3-modal/components/modal";
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ObserverService } from "../Services/observer.service";
import { Global } from "../Shared/global";

@Component({
    selector: 'technicalContact-component',
    templateUrl: Global.TEMPLATE_LOCATION + 'technicalContact.template.html'
})

export class TechnicalContactComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    books: IBook[];
    leadContactFrm: FormGroup;
    subscription: Subscription;
    item: number;

    constructor(private fb: FormBuilder, private _stateService: ObserverService<number>) {
        this.books = [
            {
                id: 0,
                title: 'Maryland',
                price: 'Rs. 1400'
            },
            {
                id: 1,
                title: 'California',
                price: 'Rs. 1700'
            },
            {
                id: 2,
                title: 'Georgia',
                price: 'Rs. 1000'
            }
        ]
        this.books.length;

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