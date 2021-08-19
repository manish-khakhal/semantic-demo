import React from "react";
import { Button, Form, Message, Segment } from "semantic-ui-react";
import imagelogon from "../imagelogon.png";
import imagenature from "../imagenature.png";
import imagebox from "../imagebox.png";

function HomePage() {
  return (
    <div className="App">
     
      <div>








        
        <div class="ui fluid container">
          <div class="ui stackable two column grid">
            <div class="row logon">
           

              {/* this is a placeholder row */}
              <div class="one wide column"></div>

              <div class="five wide column">
       <br></br>

                <h2>
                  Buy and sell used items. Creating contientious consumers on a
                  daily basis.
                </h2>

                {/* this is the established user emaail log in and password */}

                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="mail"
                      iconPosition="left"
                      placeholder="E-mail address"
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                    />

                    <Button color="teal" fluid size="large">
                      Login
                    </Button>
                  </Segment>
                </Form>
             
                <br></br>
                <br></br>
              </div>

             

              <div class="eight wide column">
                <img
                  src={imagelogon}
                  style={{ width: "100%" }}
                  alt=""
                  class="ui fluid image"
                />
              </div>
            </div>

            <div class="row hero ">
              <div class="one wide column"></div>
              <div class="five wide column">
                <img
                  src={imagebox}
                  style={{ width: "100%" }}
                  alt=""
                  class="ui fluid image"
                />
              </div>

              <div class="eight wide column">
                {" "}
                <h2>First Time? Create a New Account!</h2>
                <Form size="large">
                
                    <Form.Input fluid placeholder="First Name" />
                    <Form.Input fluid placeholder="Last Name" />

                    <Form.Input fluid placeholder="Phone" />
                    <Form.Input fluid placeholder="Email" />

                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Create Password"
                      type="password"
                    />

                    <Button color="olive" fluid size="large">
                     Create Account
                    </Button>
                 
                </Form>
               
              </div>
            </div>

            <div class="row information conserve">
              <div class="one wide column"></div>

              <div class="five wide column">
                <img
                  src={imagenature}
                  style={{ width: "100%" }}
                  alt=""
                  class="ui fluid image nature"
                />
              </div>
              <div class="eight wide column">
                <br></br>
            

                <h2 class="information">Why buy used? </h2>

                <h4 class="information">
                  Consumers believe that being economical is the only reason to
                  purchase used items, but there's a bigger picture. Our group
                  of volunteers is here to remind you that your purchases can
                  not only help others but contribute to maintaining our natural
                  global environment.
                </h4>

                <h4 class="information">
                  Every repurchased desk, saves a tree. Every clothing item is
                  one less area of land that can given back to nature. Do your
                  part. Be a contientious consumer.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
