import {graphql, buildSchema} from 'graphql';
var schema = buildSchema(`
    scalar Date
    type Error {
        errcode: Int,
        errmsg : String
    }
    input UserInput {
        name    : String
        nickname: String!
        password: String!
        gender  : Int!
        age     : Int
    }
    input ClassInput {
        name    : String!
        desc    : String
    }
    type User {
        id      : ID!
        # Array of role ids
        roles   : [String]
        classes : [Class]
        active  : Boolean
        name    : String!
        nickname: String!
        password: String!
        # 1 - Male, 2 - Female, 0 - Unknown
        gender  : Int!
        age     : Int
    }
    type Class {
        id      :ID!
        name    :String!
        desc    :String
        ctime   :Date
    }
    type Query {
        getUser(id: ID!) : User
        getUserByNickname(name: String): User
        listUser        : [User]
        getClass(id: ID!): Class
        getClassByName(name:String): Class
        listClass       : [Class]
    }
    type Mutation {
        addUser(input: UserInput): User
        updateUser(id: ID!, input: UserInput): User
        deleteUser(id: ID!): Boolean!

        addClass(input: ClassInput): Class
        updateClass(id: ID!, input: ClassInput): Class
        deleteClass(id: ID!): Boolean!
    }
    schema {
        query: Query
        mutation: Mutation
    }
`);
export default schema;
