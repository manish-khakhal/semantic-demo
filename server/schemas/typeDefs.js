const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Garage {
    _id: ID
    name: String
    productList: [Product]
  }
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    stock: Int
    price: Float
  }
  type Order {
    _id: ID
    products: [Product]
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    password: String
    email: String
    phoneNum: String
    orders: [Order]
  }
  type Checkout {
    session: ID
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    garages: [Garage]
    products(garage: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNum: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, phoneNum: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;