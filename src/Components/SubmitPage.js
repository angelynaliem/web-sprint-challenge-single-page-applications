import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';



const SubmitPage = ( { pizzaForm } ) => {

    return (
        <div className = "homepage">
        <h3>Your order summary</h3>
        <p>{pizzaForm}</p>
        {/* <p>{location.pizzaForm.size}</p>
        <p>{location.pizzaForm.specialInstructions}</p> */}
   
     

        <Link to="/">
            <button>Home</button>
        </Link>

        </div>
    )
    

}

export default SubmitPage;