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
var core_1 = require("@angular/core");
var global_1 = require("../Shared/global");
var DropDownValue_1 = require("../Model/DropDownValue");
var observer_service_1 = require("../Services/observer.service");
var StateComponent = (function () {
    function StateComponent(_stateService) {
        this._stateService = _stateService;
        this.selectedValue = new DropDownValue_1.DropdownValue(1, 'Virginia');
        //need service to get all states here
        this.values = [
            new DropDownValue_1.DropdownValue(1, 'Virginia'),
            new DropDownValue_1.DropdownValue(2, 'Maryland'),
            new DropDownValue_1.DropdownValue(3, 'Kansas'),
            new DropDownValue_1.DropdownValue(4, 'California')
        ];
    }
    StateComponent.prototype.onChange = function (deviceValue) {
        console.log(deviceValue);
        this._stateService.changeState(deviceValue);
    };
    StateComponent.prototype.ngOnInit = function () {
    };
    return StateComponent;
}());
StateComponent = __decorate([
    core_1.Component({
        selector: 'state-component',
        templateUrl: global_1.Global.TEMPLATE_LOCATION + 'state.template.html'
    }),
    __metadata("design:paramtypes", [observer_service_1.ObserverService])
], StateComponent);
exports.StateComponent = StateComponent;
//# sourceMappingURL=state.component.js.map