export interface Login {
  emailAddressOrUserName: string,
  password: string
}

export interface ResetPassword {
  email: string,
  password: string,
  confirmPassword: string,
  token: string
}

export interface TokenData {
  name: string,
  email: string,
  role: Array<string>
}