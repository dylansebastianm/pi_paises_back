import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css"




function Nav (){
 
    return(
    <div className="nav">
        <div className="rutasNavContainer">
            <Link to ="/" className = "rutasNav">
            <   div>Landing</div>
            </Link>

            <Link to ="/home" className = "rutasNav">
                <div>Home</div>
            </Link>

            <Link to ="/activities" className = "rutasNav">
                <div>Activities</div>
            </Link>

            <Link to ="/createNewActivity" className = "rutasNav2">
                <div>Create New Activity</div>
            </Link>
            
        </div>
        
        <div>
            <input className="buscador"
            placeholder="  Search country..">

            </input>
        </div>

    </div>
    )
}

export {Nav};