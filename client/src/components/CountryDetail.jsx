import React from "react";
import "./styles/countryDetail.css";


function CountryDetail(){
    return(

        <div className="countryDetailContainer">
            <div className="imgtittle">
                <img className="imgCountryDetail" alt="No se encontró la imagen"/>
                <h2 className="countryDetailTittle">NAME</h2>
            </div>
        
            <div className="listDetails">
                <h3>Country Data:</h3>
                    <ul>
                        <p>Code:</p>
                        <p>Capital:</p>
                        <p>Subregion:</p>
                        <p>Area:</p>
                        <p>Population:</p>
                    </ul>
            </div>
            
        </div> 
    )
}

export {CountryDetail};
