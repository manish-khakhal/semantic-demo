import gql from 'graphql-tag';

export const QUERY_PRODUCTS = gql`
  query getProducts($garage: ID) {
    products(garage: $garage) {
      _id
      name
      description
      price
      stock
      image
      garage {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      garage {
        name
      }
    }
  }
`;

export const QUERY_GARAGE = gql`
{
  garage {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    password
    phoneNum
    orders {
      _id
      products {
        _id
        name
        description
        price
        stock
        image
      }
    }
  }
}
`;