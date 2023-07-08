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
  phoneNumber: number,
  accountNumber: number,
  address: string,
  birthday: Date,
  businessName: string,
  userType: string,
  balance: number,
  deleted: boolean,
  active: boolean,
  twoFactorEnabled: boolean,
  createdAt: Date,
  updatedAt: Date
}

export interface CardDeposit {
  cashMingleAccountNumber: string,
  cvc: number,
  cardName: string,
  cardNumber: number,
  cardExpiryDate: string,
  amount: number
}

export interface Withdraw {
  cashMingleAccountNumber: string,
  bankAccountNumber: string,
  bankName: string,
  amount: number,
  password: string
}

export interface Airtime {
  cashMingleAccountNumber: number,
  phoneNumber: number,
  amount: number,
  password: string
}

export interface Transfer {
  receiverAccountNumber : number,
  senderAccountNumber : number,
  amount: number,
  senderPassword : string
  description : string
}