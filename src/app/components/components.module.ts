import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './body/home/home.component';
import { HeaderComponent } from './body/header/header.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { RegisterComponent } from './auth/register/register.component';
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

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserChoiceComponent,
    AboutComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    FaqComponent,
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
    HttpClientModule
  ]
})
export class ComponentsModule { }
