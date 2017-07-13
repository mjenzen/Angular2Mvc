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
var observer_service_1 = require("../Services/observer.service");
var state_service_1 = require("../Services/state.service");
var state_1 = require("../Model/State/state");
var StateComponent = (function () {
    function StateComponent(_observerService, _stateService) {
        this._observerService = _observerService;
        this._stateService = _stateService;
        this.selectedState = new state_1.State();
    }
    StateComponent.prototype.LoadStates = function () {
        var _this = this;
        this._stateService.get(global_1.Global.BASE_STATE_ENDPOINT)
            .subscribe(function (states) {
            _this.selectedState = states[0];
            _this.states = states;
            _this._observerService.changeState(states[0].Id);
        }, function (error) { return _this.msg = error; });
    };
    StateComponent.prototype.onChange = function (id) {
        this.selectedState = this.states.filter(function (x) { return x.Id == id; })[0];
        this._observerService.changeState(id);
    };
    StateComponent.prototype.ngOnInit = function () {
        this.LoadStates();
    };
    StateComponent.prototype.ngOnDestroy = function () {
        throw new Error('Method not implemented.');
    };
    return StateComponent;
}());
StateComponent = __decorate([
    core_1.Component({
        selector: 'state-component',
        templateUrl: global_1.Global.TEMPLATE_LOCATION + 'state.template.html'
    }),
    __metadata("design:paramtypes", [observer_service_1.ObserverService, state_service_1.StateService])
], StateComponent);
exports.StateComponent = StateComponent;
//# sourceMappingURL=state.component.js.map