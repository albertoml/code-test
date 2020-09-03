const mutation = `
  type Mutation {
    updateAd(_id: String!, description: String!): Ad
  }
`

export { mutation }