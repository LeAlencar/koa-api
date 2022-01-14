const { GraphQLObjectType } =  require('graphql');
const users = require('./queryAllUsers')
const userById = require('./queryUserById');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    userById,
    users,
  }
})

module.exports = RootQuery;