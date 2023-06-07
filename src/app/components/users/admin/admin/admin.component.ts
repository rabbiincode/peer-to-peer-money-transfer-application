import { Component } from '@angular/core';
import { Sidebar } from '../../user';

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
      service: 'Register Customer',
      icon: 'supervised_user_circle',
      url: '/register'
    },
    {
      service: 'Get All Customers',
      icon: 'interpreter_mode',
      url: '/admin/customers'
    },
    {
      service: 'Get All Customers',
      icon: 'contact_emergency',
      url: '/admin/customer'
    },
    {
      service: 'Get Transaction',
      icon: 'ballot',
      url: '/admin/a'
    },
    {
      service: 'Edit Customers',
      icon: 'edit_off',
      url: '/admin/a'
    },
    {
      service: 'Deactivate Customer',
      icon: 'person_add_disabled',
      url: '/admin/a'
    },
    {
      service: 'Delete Customer',
      icon: 'delete_sweep',
      url: '/admin/a'
    },
    {
      service: 'Delete Customer',
      icon: 'delete_forever',
      url: '/admin/a'
    },
    {
      service: 'User Role',
      icon: 'person',
      url: '/admin/role'
    }
  ]
}