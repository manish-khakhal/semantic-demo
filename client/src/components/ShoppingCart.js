import React, {useEffect} from "react";
import { Button, Form, } from "semantic-ui-react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from '@apollo/client';
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_CHECKOUT } from "../utils/queries";

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


function ShoppingCart() {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session })
      })
    }
  }, [data]);

  function checkingOut(e) {
    e.preventDefault();


    getCheckout({
      //variables: { products: productIds }
    });
  }


  /*function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }*/

  /*function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

  }*/


  return (
    <div className="App">
      <h1 class="GarageCards-title">Your Shopping Cart</h1>
      <div class="ui fluid container cart ">
        <table class="ui celled table  ">
          <thead class="">
            <tr class="">
              <th class="">Product Name</th>
              <th class=""></th>
              <th class="">Price</th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="">
              <td class="">Product Item One</td>
              <td class="">placeholder for anything - delete if not needed</td>
              <td class="">$1.00</td>
            </tr>
            <tr class="">
              <td class="">Product Item One</td>
              <td class=""></td>
              <td class="">$1.00</td>
            </tr>
            <tr class="">
              <td class="">
                <b>Total</b>
              </td>
              <td class=""></td>
              <td class="">
                <b>$1.00</b>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <Form size="large">
            <Form.Input fluid placeholder="Name on Credit Card" />
            <Form.Input fluid placeholder="Address" />
            <Form.Input fluid placeholder="City " />
            <Form.Input fluid placeholder="State " />
            <Form.Input fluid placeholder="CVV " />
            <Form.Input fluid placeholder="Phone" />
            <Form.Input fluid placeholder="Email" />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Create Password"
              type="password"
            />
            <Button onClick={(e) => checkingOut(e)}>Complete Purchase</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;
