const { GraphQLObjectType, GraphQLString } = require('graphql');
const userGraphQLType = require('../types/userType');
const User = require('../../models/userModel');

module.exports = {
  type: userGraphQLType,
  args: {
    id: { type: GraphQLString }
  },
  async resolve(parent, args) {
    try {
      const user = await User.findOneAndDelete(args.id).exec();
      const deletedUser = user.remove();
      return deletedUser;
    } catch (err) {
      return console.log(err);
    }
  }
};