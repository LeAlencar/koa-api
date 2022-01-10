const { GraphQLObjectType, GraphQLString } = require('graphql');
const userGraphQLType = require('../types/userType');
const User = require('../../models/userModel');

module.exports = {
  type: userGraphQLType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  resolve(parent, args) {
    const newUser = new User({
      name: args.name,
      username: args.username,
      email: args.email,
    })

    return newUser.save();
  }
};