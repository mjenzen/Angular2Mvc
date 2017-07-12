"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var child_component_1 = require("./components/child.component");
var home_component_1 = require("./components/home.component");
var user_component_1 = require("./components/user.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'child', component: child_component_1.ChildComponent },
    { path: 'user', component: user_component_1.UserComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map