import React from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
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

      <Route 
      path = "/submit"
      render={({ location }) => {
        const { pizzaForm } = location;
        return (
          <div className="orderSummary">
            <h2>Thanks for ordering!<br></br> Here's your order summary:</h2>
            <h5>{pizzaForm}</h5>
            <h5>Name: </h5>
            <h5>Size: </h5>
            <h5>Toppings: </h5>
            <h5>Special Instructions: </h5>
          </div>
        );
        }}
        />
        {/* // <SubmitPage /> */}
      {/* </Route> */}

      </Switch>
    </>
  );
};





export default App;
