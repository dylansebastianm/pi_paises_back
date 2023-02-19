import React, { useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { getCountries } from "../actions/index.js";
import Card from "./Card.jsx";

function CardList(){
  const allCountries = useSelector(state => state.allCountries);
  
   
    const dispatch = useDispatch();


    useEffect (()=>{
        dispatch(getCountries());
        
    },[dispatch])

    
    return (
    
        <div className="listCards">
            <div>
                {allCountries.map(e => {
                    return(
                        <div>
                            <Card 
                            key={e.id}
                            name = {e.name}  
                            img = {e.img}
                            region = {e.region}
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
