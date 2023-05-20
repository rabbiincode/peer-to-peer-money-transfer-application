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
      service: 'Get All Customers',
      icon: 'interpreter_mode',
      url: '/admin/customers'
    },
    {
      service: 'Get All Customers',
      icon: 'contact_emergency',
      url: '/admin/customers'
    },
    {
      service: 'Get Transaction',
      icon: 'ballot',
      url: '/admin'
    },
    {
      service: 'Edit Customers',
      icon: 'edit_off',
      url: '/admin'
    },
    {
      service: 'Deactivate Customer',
      icon: 'person_add_disabled',
      url: '/admin'
    },
    {
      service: 'Delete Customer',
      icon: 'delete_sweep',
      url: '/admin'
    },
    {
      service: 'Delete Customer',
      icon: 'delete_forever',
      url: '/admin'
    },
    {
      service: 'User Role',
      icon: 'person',
      url: '/admin/role'
    }
  ]
}