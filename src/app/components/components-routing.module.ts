import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './users/customer/user/user.component';
import { UserDashboardComponent } from './users/customer/user-dashboard/user-dashboard.component';
import { DepositComponent } from './users/customer/deposit/deposit.component';
import { WithdrawalComponent } from './users/customer/withdrawal/withdrawal.component';
import { TransferComponent } from './users/customer/transfer/transfer.component';
import { SavingsComponent } from './users/customer/savings/savings.component';
import { AdminDashboardComponent } from './users/admin/admin-dashboard/admin-dashboard.component';
import { CustomersComponent } from './users/admin/customers/customers.component';
import { RoleComponent } from './users/admin/role/role.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'user', component: UserComponent,
    children: [
      { path: '', redirectTo:'/user/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'withdrawal', component: WithdrawalComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'savings', component: SavingsComponent },
    ]
  },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'admin', loadChildren: () => import('./users/admin/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}