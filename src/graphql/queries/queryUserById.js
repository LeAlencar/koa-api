const { GraphQLString } = require('graphql');
const userGraphQLType = require('./../types/userType');
const userModel = require('../../models/userModel');

module.exports = {
  type: userGraphQLType,
  args: { id: { type: GraphQLString } },
  resolve(parent, args) {
    return userModel.findById(args.id)
  }
};