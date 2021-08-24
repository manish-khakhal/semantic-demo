import React from "react";
import { Button, Form, } from "semantic-ui-react";
function ShoppingCart() {
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
            <Button>Complete Purchase</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;
