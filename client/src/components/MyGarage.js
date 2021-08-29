import React from "react";
import { Button } from "semantic-ui-react";

import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";


function MyGarage() {

  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }


  return (

    //Example
    /*<div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>*/

    //Tricia
    <div className="App">
      <br></br>
      <br></br>
      <div>
        <div class="ui fluid container">
          <div class="ui grid">
            <div class="row">
              <br></br>
              <div class="one wide column"></div>

              <div class="five wide column">
                <h1>My Garage Sale Items</h1>

                <h3 class="ui header">
                  <i aria-hidden="true" class="user icon"></i>
                  <div class="content">User Name</div>
                </h3>
                <h3 class="ui header">
                  <i aria-hidden="true" class="marker icon"></i>
                  <div class="content">San Francisco</div>
                </h3>
                <h3 class="ui header">
                  <i aria-hidden="true" class="mail icon"></i>
                  <div class="content">Email</div>
                </h3>
                <h3 class="ui header">
                  <i aria-hidden="true" class="phone icon"></i>
                  <div class="content">Phone</div>
                </h3>
              </div>

              <div class="eight wide column">
                <div class="ui divided items garageitems padded segment">
                  <div class="item">
                    <div class="image">
                      <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                    </div>
                    <div class="content  ">
                      <div class="ui left icon input float left fluid ">
                        <input type="text" placeholder="Item Description" />
                        <i aria-hidden="true" class="add icon"></i>
                      </div>
                      <br></br>

                      <div class="ui left icon input float left fluid">
                        <input type="text" placeholder="Keywords" />
                        <i aria-hidden="true" class="tags icon"></i>
                      </div>
                      <br></br>
                      <div class="ui right labeled input fluid">
                        <div class="ui basic label">$</div>
                        <input type="text" placeholder="Amount" />
                        <div class="ui label">.00</div>
                      </div>
                      <br></br>

                      <div class="extra">
                        <Button color="olive">Upload Image</Button>

                        <Button color="teal">Save</Button>
                        <Button color="teal">Add More</Button>
                      </div>
                    </div>
                  </div>



            
                </div>
              </div>


             
            </div>
          </div>
        </div>


        <br></br> <br></br>
      </div>
    </div>
  );
}

export default MyGarage;
