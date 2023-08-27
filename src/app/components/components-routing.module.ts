import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CustomerComponent } from './users/customer/customer/customer.component';
import { CustomerDashboardComponent } from './users/customer/customer-dashboard/customer-dashboard.component';
import { DepositComponent } from './users/customer/deposit/deposit.component';
import { WithdrawalComponent } from './users/customer/withdrawal/withdrawal.component';
import { TransferComponent } from './users/customer/transfer/transfer.component';
import { SavingsComponent } from './users/customer/savings/savings.component';
import { CustomerTransactionsComponent } from './users/customer/customer-transactions/customer-transactions.component';
import { UtilitiesComponent } from './users/customer/utilities/utilities.component';
import { ContactUsComponent } from './users/customer/contact-us/contact-us.component';
import { ProfileComponent } from './users/customer/profile/profile.component';
import { FinanceComponent } from './body/finance/finance.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'isRight' } },
  { path: 'login', component: LoginComponent, data: { animation: 'isLeft' } },
  { 
    path: 'user', component: CustomerComponent,
    children: [
      { path: '', redirectTo:'/user/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: CustomerDashboardComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'withdrawal', component: WithdrawalComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'savings', component: SavingsComponent },
      { path: 'transactions', component: CustomerTransactionsComponent },
      { path: 'utilities', component: UtilitiesComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: 'finance', component: FinanceComponent },
      { path: 'profile', component: ProfileComponent }
    ],
    //canActivate: [LoginGuard]
  },
  { path: 'finance', component: FinanceComponent},
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'admin', loadChildren: () => import('./users/admin/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}