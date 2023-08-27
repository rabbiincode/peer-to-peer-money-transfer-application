import { Component } from '@angular/core';
import { Sidebar } from '../../../interfaces/user';

@Component({
  selector: 'cashMingle-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent {
  fullWidth = true
  togglePage(pageWidth: boolean){
    this.fullWidth = pageWidth
  }

  sidebar: Sidebar[] = [
    {
      service: 'Dashboard',
      icon: 'dashboard',
      url: '/admin/dashboard'
    },
    {
      service: 'Register User',
      icon: 'supervised_user_circle',
      url: '/admin/register'
    },
    {
      service: 'Search Users',
      icon: 'search',
      url: '/admin/search'
    },
    {
      service: 'Get All Users',
      icon: 'interpreter_mode',
      url: '/admin/users'
    },
    {
      service: 'View Database 🥇',
      icon: 'contact_emergency',
      url: '/admin/database'
    },
    {
      service: 'Get Transaction',
      icon: 'ballot',
      url: '/admin/transactions'
    },
    {
      service: 'Edit User',
      icon: 'edit_off',
      url: '/admin/edit'
    },
    {
      service: 'Remove User',
      icon: 'person_add_disabled',
      url: '/admin/remove-user'
    },
    {
      service: 'User Role 🥇',
      icon: 'person',
      url: '/admin/role'
    }
  ]
}