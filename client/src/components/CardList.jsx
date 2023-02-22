import React, { useEffect, useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { getCountries } from "../actions/index.js";
import { getCountryName } from "../actions/index.js";

import Card from "./Card.jsx";
import "./styles/cardList.css"
import { Link } from "react-router-dom";
import "./styles/nav.css"

function CardList(){
  const allCountries = useSelector(state => state.allCountries);


  const [countrySearch, setcountrySearch] = useState("")

  
   
    const dispatch = useDispatch();


    useEffect (()=>{
        dispatch(getCountries());
       
    },[dispatch])


    useEffect (()=>{
        dispatch(getCountryName(countrySearch));
       
    },[dispatch, countrySearch])


    const handleSubmit = (event) => {
        event.preventDefault();
        setcountrySearch(event.target.value)
    }

    return (

        <div >

                <div className="nav">
                    <div className="rutasNavContainer">
                        <Link to ="/" className = "rutasNav">
                        <div>Landing</div>
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
                placeholder="  Search country.."
                onChange={(event)=>handleSubmit(event)}>

                    </input>
                </div>

                </div>




    
        
            <div className="listCards">
                {allCountries.map(e => {
                    return(
                        <div>
                            <Card 
                            key={e.id}
                            id = {e.id}
                            name = {e.name}  
                            img = {e.img}
                            capital = {e.capital}
                            continent = {e.continent}
                            population = {e.population}
                            >
                            </Card>
                        </div>
                        
                    )
                  })}
            </div>
        </div>
  
    )

}

export {CardList};
