import React from "react";
import "./styles/form.css"

function Form(){
    return(
        <div className="formContainer">
            <div className="formList">
                <div className="form">
                <label>Name of Activity:</label>
                <input className="input"></input>
                </div>

                <div className="form">
                <label>Duration:</label>
                <input className="input"></input>
                </div>

                <div className="form">
                <label>Dificulted:</label>
                <input className="input"></input>
                </div>

                <div className="form">
                <label>Temporada:</label>
                <input className="input"></input>
                </div>
            </div>

          {/*   <div className="countrySelector">
            <label>Country:</label>
            <input></input>
            </div> */}
        </div>
    )
}

export {Form};
