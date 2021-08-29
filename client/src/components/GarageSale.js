import React from "react";
import { Button } from "semantic-ui-react";

import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';


function GarageSale() {

  //Example 
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }



  return (
    //Example
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>

    //Tricia's 
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





















                  
                <h1>Search Garage Sale Items</h1>

                <div class="ui card">
                  <div class="image">
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </div>
                  <div class="content">
                    <div class="header">A Sale Item</div>
                    <div class="meta">
                      <span class="date">keyword, keyword, keyword</span>
                     
                    </div>

                
<br></br>
                    <Button color="olive">Add to Shopping Cart</Button>


                    
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

export default GarageSale;