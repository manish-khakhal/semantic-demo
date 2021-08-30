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
                  <div class="content">Jeff Smith</div>
                </h3>
                <h3 class="ui header">
                  <i aria-hidden="true" class="marker icon"></i>
                  <div class="content">San Francisco</div>
                </h3>
                <h3 class="ui header">
                  <i aria-hidden="true" class="mail icon"></i>
                  <div class="content">JSmith@gmail.com</div>
                </h3>
                <h3 class="ui header">
                  <i aria-hidden="true" class="phone icon"></i>
                  <div class="content">707 564 0477</div>
                </h3>
              </div>

              <div class="eight wide column">

{/* this is a placeholder item */}



                <div class="ui divided items garageitems padded segment">
                  <div class="item">
                    <div class="image">
                      <img src="/image_seeds/chair1.png" />
                    </div>
                    <div class="content  ">
                      <div class="ui left icon input float left fluid ">
                        <input type="text" placeholder="Wooden chair" />
                        <i aria-hidden="true" class="add icon"></i>
                      </div>
                      <br></br>

                      <div class="ui left icon input float left fluid">
                        <input type="text" placeholder="wood, chair, dining" />
                        <i aria-hidden="true" class="tags icon"></i>
                      </div>
                      <br></br>
                      <div class="ui right labeled input fluid">
                        <div class="ui basic label">$</div>
                        <input type="text" placeholder="$5.00" />
                        <div class="ui label"></div>
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

{/* this is a placeholder item */}


                <div class="ui divided items garageitems padded segment">
                  <div class="item">
                    <div class="image">
                      <img src="/image_seeds/chair2.png" />
                    </div>
                    <div class="content  ">
                      <div class="ui left icon input float left fluid ">
                        <input type="text" placeholder="set of colored metal chairs" />
                        <i aria-hidden="true" class="add icon"></i>
                      </div>
                      <br></br>

                      <div class="ui left icon input float left fluid">
                        <input type="text" placeholder="metail chairs" />
                        <i aria-hidden="true" class="tags icon"></i>
                      </div>
                      <br></br>
                      <div class="ui right labeled input fluid">
                        <div class="ui basic label">$</div>
                        <input type="text" placeholder="$10.00" />
                        <div class="ui label"></div>
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
