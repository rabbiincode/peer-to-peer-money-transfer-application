import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { SearchComponent } from '../search/search.component';
import { AllUsersComponent } from '../all-users/all-users.component';
import { RoleComponent } from '../role/role.component';
import { RegisterComponent } from 'src/app/components/auth/register/register.component';
import { DatabaseComponent } from '../database/database.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { EditComponent } from '../edit/edit.component';
import { RemoveUserComponent } from '../remove-user/remove-user.component';
import { LoginGuard } from 'src/app/components/guards/login.guard';

const routes: Routes = [
  { 
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo:'/admin/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'search', component: SearchComponent },
      { path: 'users', component: AllUsersComponent },
      { path: 'database', component: DatabaseComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'edit', component: EditComponent },
      { path: 'remove-user', component: RemoveUserComponent },
      { path: 'role', component: RoleComponent },
    ],
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
