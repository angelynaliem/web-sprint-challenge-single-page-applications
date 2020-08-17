import React from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage';
import PizzaForm from './Components/PizzaForm';

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

      </Switch>
    </>
  );
};
export default App;
