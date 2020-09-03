const mutation = `
  type Mutation {
    signIn(userName: String!, password: String!, grantType: String!, clientId: String!): UserAuthInfo
  }
`

export { mutation }