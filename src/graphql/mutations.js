const { GraphQLObjectType } = require('graphql');

const addUser = require('./mutations/addUser')
const removeUser = require('./mutations/removeUser')
const updateUser = require('./mutations/updateUser')

const Mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser,
    removeUser,
    updateUser
  }
})

module.exports = Mutations;