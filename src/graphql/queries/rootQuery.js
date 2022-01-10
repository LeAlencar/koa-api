const { GraphQLObjectType } =  require('graphql');
const queryAllUsers = require('./queryAllUsers')
const queryUserById = require('./queryUserById');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryUserById,
    queryAllUsers,
  }
})

module.exports = RootQuery;