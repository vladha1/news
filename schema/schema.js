const {buildSchema} = require('graphql')

const newsSchema = buildSchema(`
  type Query {
    News: [News],
    newsByTitle(Title: String!): News,
    newsSearch(Title: String!): [News],
    
  }

  type Mutation {
    addNews(Title: String!, Summary_Detail: String!, Source: String!, link: String!, _id: String!, Published: String!,Tags: String): News
  }

  type News {
    Source: String,
    Title: String,
    Summary_Detail: String,
    link: String,
    _id: String,,
    Tags: String,
    Published: String

  }
`)

module.exports = newsSchema