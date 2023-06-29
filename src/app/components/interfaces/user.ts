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
  email: string,
  phoneNumber: string,
  accountNumber: number,
  address: string,
  birthday: Date,
  businessName: string,
  userTypeId: number,
  accountType: string,
  balance: number,
  deleted: boolean,
  active: boolean,
  twoFactorEnabled: boolean,
  createdAt: Date,
  updatedAt: Date
}