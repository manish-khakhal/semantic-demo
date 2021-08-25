import React, { useState } from "react";
import { Button, Form, Message, Segment } from "semantic-ui-react";
import imagelogon from "../imagelogon.png";
import imagenature from "../imagenature.png";
import imagebox from "../imagebox.png";

import {useMutation} from '@apollo/react-hooks';
//import { Link } from "react-router-dom";
import {LOGIN} from "../utils/mutations";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

/*function Login(props) {
  const[formState, setFormState] = useState({email: '', password: ''})
  const[login, {error}] = useMutation(LOGIN);

  const handleForm
}*/

function HomePage(props) {
  const[formState, setFormState] = useState({email: '', password: ''})
  const[login, {error}] = useMutation(LOGIN);
  const [addUser] = useMutation(ADD_USER);

  const lHandleFormSubmit = async event => {
    event.preventDefault();
    try{
      const mutationResponse = await login({ variables: {email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    }
    catch(err) {
      console.log(err);
    }
  };

  const aHandleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, phoneNum: formState.phoneNum, lastName: formState.lastName
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const {name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="App">
      <br></br>
      <br></br>
      <div>








        
        <div class="ui fluid container">
          <div class="ui stackable two column grid">
            <div class="row">
              <br></br>

              {/* this is a placeholder row */}
              <div class="one wide column"></div>

              <div class="five wide column">
                <h1>The Garage Sale</h1>

                <h2>
                  Buy and sell used items. Creating contientious consumers on a
                  daily basis.
                </h2>

                {/* this is the established user emaail log in and password */}

                <Form size="large" onSubmit ={lHandleFormSubmit}>
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="mail"
                      iconPosition="left"
                      placeholder="E-mail address"
                      onChange = {handleChange}
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      onChange = {handleChange}
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
                <h1>First Time? Create a New Account!</h1>
                <Form size="large" onSubmit={aHandleFormSubmit}>
                
                    <Form.Input fluid placeholder="First Name" onChange={handleChange}/>
                    <Form.Input fluid placeholder="Last Name" onChange={handleChange}/>

                    <Form.Input fluid placeholder="Phone" onChange={handleChange}/>
                    <Form.Input fluid placeholder="Email" onChange={handleChange}/>

                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Create Password"
                      type="password"
                      onChange={handleChange}
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
                  class="ui fluid image"
                />
              </div>
              <div class="eight wide column">
                <br></br>
                <br></br>

                <h2 class="information">Why buy used? </h2>

                <h3 class="information">
                  Consumers believe that being economical is the only reason to
                  purchase used items, but there's a bigger picture. Our group
                  of volunteers is here to remind you that your purchases can
                  not only help others but contribute maintaining our natural
                  global environment.
                </h3>

                <h3 class="information">
                  Every repurchased desk, saves a tree. Every clothing item is
                  one less area of land that can given back to nature. Do your
                  part. Be a contientious consumer.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;