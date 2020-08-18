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

      <Route path = "/submit" >
        <SubmitPage />
      </Route>

      </Switch>
    </>
  );
};





export default App;
