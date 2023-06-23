export interface Sidebar {
  service: string,
  icon: string,
  url: string
}

export interface UserData {
  firstName: string,
  middleName: string,
  lastName: string,
  userName: string,
  phoneNumber: string,
  email: string,
  birthday: Date,
  userTypeId: number,
  AccountType: string,
  balance: number,
  deleted: false,
  active: false,
  twoFactorEnabled: boolean,
  createdAt: Date,
  updatedAt: Date
}