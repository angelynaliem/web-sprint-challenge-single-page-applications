import React from "react";
import './App.css';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import Homepage from './Components/Homepage';
import PizzaForm from './Components/PizzaForm';
import SubmitPage from "./Components/SubmitPage";



const App = () => {


  return (
    <>
      <h1>Lambda Eats</h1>

      <Switch>

      <Route exact path = "/" >
        <Homepage />
      </Route>

      <Route path = "/pizza" >
        <PizzaForm />
      </Route>

      {/* <Route 
      path = "/submit"
      render={ ( { location } ) => {
        
        const { pizzaForm, name, size, toppingOne, toppingTwo, toppingThree, toppingFour, specialInstructions } = location;
        
        return (
          <div className="orderSummary">

            <h2>Thanks for ordering!<br></br> Here's your order summary:</h2>
       
            <h5>Name: {name}</h5>
            <h5>Size: {size}</h5>
            <h5>Toppings: {toppingOne}, {toppingTwo}, {toppingThree}, {toppingFour}</h5>
            <h5>Special Instructions: {specialInstructions} </h5>

            <h5>State: {'{'}
              {Object.keys(pizzaForm).map((element, index) => {
              return (
              <span key={index}>
              {element}: {state[element].toString()}
              </span>
              )
              })}
              {'}'}
              </h5>

            <Link to="/">Go back to Home</Link>

          </div>
        );
        }}
        /> */}
        {/* // <SubmitPage /> */}
      {/* </Route> */}

      </Switch>
    </>
  );
};





export default App;
