import React from "react";
import { Link } from "react-router-dom";
import "./styles/card.css"


/* [ ] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /countries y deberá mostrar su:
Imagen de la bandera
Nombre
Continente */


function Card ({id, name, img, capital, continent, population}){
    return(
        
    <div className="listCards ">
            <div className="carta front"> 
                    <div className="imagenYtitulo">
                        <img className = "imagen" src = { img }  alt = 'No se encontro la imagen' />
                        <h4>{name}</h4> 
                    </div>

                    <div className="infoCountryCard">
                        <p>Capital: {capital} </p> 
                        <p>Continent: {continent}</p>
                        <p>Population: {population}</p>
                    </div>
                    <Link to ={`/countrydetail/${id}`} >
                        <button className="buttonCard">Information</button>
                    </Link>
            </div>


    </div>
   
    )

}

export default Card;  
