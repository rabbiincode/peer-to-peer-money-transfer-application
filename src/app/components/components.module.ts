import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './body/home/home.component';
import { HeaderComponent } from './body/header/header.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { UserChoiceComponent } from './auth/user-choice/user-choice.component';
import { AboutComponent } from './body/about/about.component';
import { ServiceComponent } from './body/service/service.component';
import { TeamComponent } from './body/team/team.component';
import { ContactComponent } from './body/contact/contact.component';
import { FooterComponent } from './body/footer/footer.component';
import { FaqComponent } from './body/faq/faq.component';
import { ScrollToTopComponent } from './body/scroll-to-top/scroll-to-top.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbAccordionModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { UserComponent } from './users/customer/user/user.component';
import { UserHeaderComponent } from './users/user-header/user-header.component';
import { UserSidebarComponent } from './users/user-sidebar/user-sidebar.component';
import { AdminComponent } from './users/admin/admin/admin.component';
import { UserDashboardComponent } from './users/customer/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './users/admin/admin-dashboard/admin-dashboard.component';
import { DepositComponent } from './users/customer/deposit/deposit.component';
import { WithdrawalComponent } from './users/customer/withdrawal/withdrawal.component';
import { TransferComponent } from './users/customer/transfer/transfer.component';
import { SavingsComponent } from './users/customer/savings/savings.component';
import { CustomersComponent } from './users/admin/customers/customers.component';
import { RoleComponent } from './users/admin/role/role.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserChoiceComponent,
    AboutComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    FaqComponent,
    ScrollToTopComponent,
    ForgotPasswordComponent,
    UserComponent,
    AdminComponent,
    UserHeaderComponent,
    UserSidebarComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    DepositComponent,
    WithdrawalComponent,
    TransferComponent,
    SavingsComponent,
    CustomersComponent,
    RoleComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatExpansionModule,
    MatFormFieldModule,
    HttpClientModule,
    MdbCarouselModule,
    NgbAccordionModule,
    NgbAlertModule,
    MatProgressSpinnerModule,
  ]
})
export class ComponentsModule { }
