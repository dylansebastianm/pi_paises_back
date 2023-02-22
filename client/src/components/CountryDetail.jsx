import "./styles/countryDetail.css";
import React, { useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { getCountryDetail } from "../actions/index.js";
import {useParams} from "react-router-dom";


function CountryDetail(){

    const countryId = useSelector(state => state.countryDetail);
  
   
    const dispatch = useDispatch();

    let {id} = useParams()

    useEffect (()=>{
        dispatch(getCountryDetail(id));
       
    },[dispatch])


    return(



        <div className="countryDetailContainer">
            <div className="imgtittle">
                <img className="imgCountryDetail" src= {countryId.img} alt="No se encontró la imagen"/>
                <h2 className="countryDetailTittle">{countryId.name}</h2>
            </div>
        
            <div className="listDetailsContainer">
                
                    <ul className="listDetails">
                        <h3 className="detaisTittle">Country Data:</h3>
                        <p>Code: </p>
                        <hr></hr>
                        <p>Continent: </p>
                        <hr></hr>
                        <p>Capital:</p>
                        <hr></hr>
                        <p>Subregion: </p>
                        <hr></hr>
                        <p>Area: </p>
                        <hr></hr>
                        <p>Population:</p>
                    </ul>   
                    <ul className="listDetails2">
                        <p>{countryId.id}</p>
                        <hr></hr>
                        <p>{countryId.continent}</p>
                        <hr></hr>
                        <p>{countryId.capital}</p>
                        <hr></hr>
                        <p>{countryId.subregion}</p>
                        <hr></hr>
                        <p>{countryId.area}</p>
                        <hr></hr>
                        <p>{countryId.population}</p>
                    </ul>
            </div>
            
        </div> 
    )
}

export {CountryDetail};
