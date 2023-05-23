import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { CustomersComponent } from '../customers/customers.component';
import { RoleComponent } from '../role/role.component';
import { LoginGuard } from 'src/app/components/guards/login.guard';

const routes: Routes = [
  { 
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo:'/admin/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'role', component: RoleComponent },
    ],
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
