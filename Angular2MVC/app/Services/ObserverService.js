"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ObserverService = (function () {
    function ObserverService() {
        this._source = new BehaviorSubject_1.BehaviorSubject(null);
        this.sourceItem$ = this._source.asObservable();
    }
    ObserverService.prototype.changeState = function (item) {
        this._source.next(item);
    };
    return ObserverService;
}());
ObserverService = __decorate([
    core_1.Injectable()
], ObserverService);
exports.ObserverService = ObserverService;
//# sourceMappingURL=ObserverService.js.map