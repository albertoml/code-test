const userType = `
  
  type User {
    userName: String,
    password: String
  }
  
  type UserAuthInfo {
    access_token: String,
    token_type: String,
    expires_in: String,
    error: String
  }
`

export { userType }