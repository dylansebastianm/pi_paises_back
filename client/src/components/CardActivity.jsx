import React from "react";
import "./styles/activity.css"

function CardActivity({ name,  dificulted, duration, season, country, countryImg}) {
    return(
            <div className="cardActivityContainer">
                <h3 className="activityTittle">ACTIVITY AVAILABLE</h3>

                <div className="activityDetailList">
                    <ul className="listActivity1">
                        <p>Name: </p>
                        <hr></hr>
                        <p>Duration: </p>
                        <hr></hr>
                        <p>Difficulty: </p>
                        <hr></hr>
                        <p>Season: </p>
                    </ul>
                    <ul className="listActivity2">
                        <p>{name}</p>
                        <hr></hr>
                        <p>{duration}</p>
                        <hr></hr>
                        <p>{dificulted}</p>
                        <hr></hr>
                        <p>{season}</p>
                    </ul>


                    <div className="listActivity3">
                        <img 
                        className="imgCountryActivity"
                        src = {countryImg}></img>
                        <h3> {country} </h3>
                    </div>
                     
                    
                </div>
            </div>
    )
}

export {CardActivity};