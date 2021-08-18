import React from "react";
import { Button } from "semantic-ui-react";

function MyGarage() {
  return (
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
