import React from "react";
import "./styles/form.css"

function Form(){
    return(
        <div className="formContainer">
            <div className="formList">
                <div className="form">
                <label>Name:</label>
                <input className="input"></input>
                </div>
                    

                <div className="form">
                <label>Duration:</label>
                <input className="input"></input>
                </div>

                <div className="form">
                <label>Difficulty:</label>
                <input className="input"></input>
                </div>

                <div className="form">
                <label>Season:</label>
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
