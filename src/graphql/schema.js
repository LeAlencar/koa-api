const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const userGraphQLType =  require('./userType');
const User = require('../models/userModel');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: userGraphQLType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return User.findById(args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});
