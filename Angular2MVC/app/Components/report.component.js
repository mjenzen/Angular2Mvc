"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var modal_1 = require("ng2-bs3-modal/components/modal");
var core_1 = require("@angular/core");
var observer_service_1 = require("../Services/observer.service");
var global_1 = require("../Shared/global");
var ReportComponent = (function () {
    function ReportComponent(fb, _stateService) {
        this.fb = fb;
        this._stateService = _stateService;
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
        ];
        this.books.length;
    }
    ReportComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leadContactFrm = this.fb.group({
            Id: [''],
            FirstName: ['', forms_1.Validators.required],
            LastName: ['']
        });
        this.subscription = this._stateService.sourceItem$.subscribe(function (item) {
            console.log(item);
            _this.item = item;
        });
    };
    return ReportComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", modal_1.ModalComponent)
], ReportComponent.prototype, "modal", void 0);
ReportComponent = __decorate([
    core_1.Component({
        selector: 'report-component',
        templateUrl: global_1.Global.TEMPLATE_LOCATION + 'report.template.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, observer_service_1.ObserverService])
], ReportComponent);
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.component.js.map