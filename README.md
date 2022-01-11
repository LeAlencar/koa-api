# Koa CRUD

This project only consists in a Graphql CRUD using Koa framework. I'm still learning it so this code probably isn't the best one. Feel free to reach me and show how I can improve it. 


## Getting started
```bash
# clone repo
$ https://github.com/lealencar/koa-api.git
$ cd koa-api

# install dependencies
$ yarn install

# start project
$ yarn start:dev

# see on graphiql graphql interface on localhost link
http://localhost:9000/graphql
```

## Queries

### User
- All
```gql
{
  queryAllUsers {
    name,
    username,
    email
  }
}
```
- Query by ID
```gql
{
  queryById {
    name
    username
    email
  }
}
```

## Mutations

### User
- Create
```gql
mutation {
  createUser(
    name: "Leandro Alencar", 
    username: "lealencar", 
    email: "zzleandrobritozz@gmail.com") {
    name
    username
    email
  }
}
```
- Delete
```gql
mutation {
  removeUser(id: "") {
    id
    name
    username
    email
  }
}
```

- Update
```gql
mutation {
  updateUser(
    id: "5c51a8f59121525ff44c41b2", 
    name: "Leandro B Alencar",
    username: "something", 
    email: "zzleandrobritozz@gmail.com") {
    id
    name
    username
    email
  }
}

```

### Todo
- [ ] Add tests using supertests
- [ ] Add auth

