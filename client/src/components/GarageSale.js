import React from "react";
import { Button } from "semantic-ui-react";

function GarageSale() {
  return (
    <div className="App">
      <div>
        <h1 class="GarageCards-title">Search Garage Sale Items</h1>
        <div class="ui fluid container">
          <div class="row garage-card ">
            {/* this is the card section*/}

            <div class="ui cards ">
              {/* this is a garage card */}

              <div class="ui card ">
                <div class="image">
                  <img src="/image_seeds/chair1.png" />
                </div>
                <div class="content">
                  <div class="header">Wooden Dining Chair</div>
                
                  <div class="description">
                    Wooden Dining chair. Like New
                  </div>
                  <div class="Garage">Jeff Smith</div>
                  <div class="price">$5.00</div>

                  <Button color="olive">Add to Shopping Cart</Button>
                </div>
              </div>

  {/* this is a garage card */}
  <div class="ui card ">
                <div class="image">
                  <img src="/image_seeds/stroller.png" />
                </div>
                <div class="content">
                  <div class="header">Red Stroller</div>
                
                  <div class="description">
                    Stroller Like New
                  </div>
                  <div class="Garage">Richard Decker</div>
                  <div class="price">$5.00</div>

                  <Button color="olive">Add to Shopping Cart</Button>
                </div>
              </div>


  {/* this is a garage card */}
  <div class="ui card ">
                <div class="image">
                  <img src="/image_seeds/desk2.png" />
                </div>
                <div class="content">
                  <div class="header">Large Office Desk</div>
                
                  <div class="description">
                    Large Wooden Office Desk L Shaped
                  </div>
                  <div class="Garage">Jay S</div>
                  <div class="price">$60.00</div>

                  <Button color="olive">Add to Shopping Cart</Button>
                </div>
              </div>




  {/* this is a garage card */}
  <div class="ui card ">
                <div class="image">
                  <img src="/image_seeds/chair1.png" />
                </div>
                <div class="content">
                  <div class="header">Wooden chair</div>
                
                  <div class="description">
                    Wooden Dining Chair
                  </div>
                  <div class="Garage">Richard Decker</div>
                  <div class="price">$5.00</div>

                  <Button color="olive">Add to Shopping Cart</Button>
                </div>
              </div>



  {/* this is a garage card */}
  <div class="ui card ">
                <div class="image">
                  <img src="/image_seeds/dress1.png" />
                </div>
                <div class="content">
                  <div class="header">Pink Sun Dress</div>
                
                  <div class="description">
                   Medium Pink Dress with Lace
                  </div>
                  <div class="Garage">Rachael D</div>
                  <div class="price">$5.00</div>

                  <Button color="olive">Add to Shopping Cart</Button>
                </div>
              </div>




  {/* this is a garage card */}
  <div class="ui card ">
                <div class="image">
                  <img src="/image_seeds/chair2.png" />
                </div>
                <div class="content">
                  <div class="header">Pink Sun Dress</div>
                
                  <div class="description">
                   set of colored metal chairs
                  </div>
                  <div class="Garage">Jeff Smith</div>
                  <div class="price">$10.00</div>

                  <Button color="olive">Add to Shopping Cart</Button>
                </div>
              </div>




















              
            </div>
          </div>
        </div>
      </div>
      <br></br> <br></br>
    </div>
  );
}

export default GarageSale;