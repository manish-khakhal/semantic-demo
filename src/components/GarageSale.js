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
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </div>
                <div class="content">
                  <div class="header">Bike</div>
                  <div class="meta">keywords, keywords, keywords</div>
                  <div class="description">
                    woeur iueoriuw eroiuwe onsRIuwoe uwoiuf xoi . QIrwoe oier
                    oweurowiuerwiurowiuerowe rowiu rweewori weoiru
                  </div>
                  <div class="Garage">The Garage Owners email or name?</div>
                  <div class="price">$1.00</div>

                  <Button color="olive">Add to Shopping Cart</Button>
                </div>
              </div>

  {/* this is a garage card */}
              <div class="ui card">
                <div class="image">
                  <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </div>
                <div class="content">
                  <div class="header">Red Bike</div>
                  <div class="meta">keywords, keywords, keywords</div>
                  <div class="description">
                    woeur iueoriuw eroiuwe onsRIuwoe uwoiuf xoi . QIrwoe oier
                    oweurowiuerwiurowiuerowe rowiu rweewori weoiru
                  </div>
                  <div class="Garage">The Garage Owners email or name?</div>
                  <div class="price">$1.00</div>

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
