const query = `
  type Query {
    promotedAds(skip: Int!, limit: Int!): [Ad]
    ads(skip: Int!, limit: Int!): [AdHistory]
  }
`

export { query }