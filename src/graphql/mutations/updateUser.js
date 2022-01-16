const { GraphQLString } = require('graphql');
const userGraphQLType = require('../types/userType');
const User = require('../../models/userModel');

module.exports = {
  type: userGraphQLType,
  args: {
    id: { type: GraphQLString},
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },

  },
  async resolve(parent, args) {
    try {
      const user = await User.findById(args.id);
      user.name = args.name;
      user.username = args.username,
      user.email = args.email;
      const updatedUser = user.save();
      return updatedUser;
    } catch (err) {
      return console.log(err);
    }
  }
};