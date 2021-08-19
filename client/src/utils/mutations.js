import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      products {
        _id
      name
      description
      price
      stock
      garage {
        name
      } 
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNum: String!) {
    addUser(firstName: String, lastName: String, email: String, password: String, phoneNum: String) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_GARAGE = gql`
  mutation addGarage(name: String!) {
    productList: {
        products {
            _id
          name
          description
          price
          stock

        }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(name: String!, description: String!, image: String!, stock: Int!, price: Float!){
      addProduct(name: String, description: String, image: String, stock: Int, price: Float){
          token
          product{
          _id
          }
      }
  }
`;