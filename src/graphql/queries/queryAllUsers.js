const { GraphQLList } =  require('graphql');
const userGraphQLType = require('./../types/userType');
const userModel = require('../../models/userModel');

module.exports = {
  type: new GraphQLList(userGraphQLType),
  args: {},
  resolve() {
    return userModel.find({})
  }
}