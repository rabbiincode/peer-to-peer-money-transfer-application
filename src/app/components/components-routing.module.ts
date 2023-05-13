import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterRoutingModule } from './auth/register/register-routing.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', loadChildren: () => import('./components.module').then(m => m.ComponentsModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RegisterRoutingModule],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }