import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./Components/dashboard.component";


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'index', redirectTo: 'home'},
    { path: 'home', component: DashboardComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);