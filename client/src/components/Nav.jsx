import React from "react";
import "./styles/nav.css"


function Nav (){
    return(
    <div className="nav">
        <div className="rutasNav">
            <div>Home</div>
            <div>Activities</div>
        </div>
        
        <div className="buscador">
            <input></input>
            <button>Search</button>
        </div>

    </div>
    )
}

export {Nav};