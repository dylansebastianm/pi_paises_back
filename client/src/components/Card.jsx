import React from "react";
import "./styles/card.css"


/* [ ] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /countries y deberá mostrar su:
Imagen de la bandera
Nombre
Continente */


function Card ({name, img, region, population}){
    return(
    <div>
            <div className="carta"> 
                    <div className="imagenYtitulo">
                        <img className = "imagen" src = { img }  alt = 'No se encontro la imagen' />
                        <h4>{name}</h4> 
                    </div>
                    <div>
                    <p>{region} </p>
                    <p>{population}</p>
                </div>
                <button>Information</button>
            </div>
            
    </div>
    )

}

export default Card;  
