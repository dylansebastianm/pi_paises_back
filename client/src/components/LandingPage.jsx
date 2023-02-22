import React from "react";
import "./styles/LandingPage.css"
import {Link} from "react-router-dom";

function LandingPage (){    
        return(
        <div className="LandingBackground">
            
                <div className="tittleAndButton">
                    <h1 className="tittle">REACT APP COUNTRIES FOR HENRY</h1>
                    <Link to = "/home">
                    <button className="button" >¡Show me!</button>
                    </Link>
                </div>
        </div>
    )   
}

export {LandingPage};
