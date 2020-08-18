import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Image from './Pizza.jpg';


const Homepage = () => {

    return (
        <div className = "homepage">
        <img className="homeImage" src={Image}></img>
        <Link to="/pizza">
            <Button className="button" style={{backgroundColor: 'red'}}>Order Pizza!</Button>
        </Link>
        </div>
    )
    

}

export default Homepage;