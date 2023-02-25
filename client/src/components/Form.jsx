import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { postActivity } from "../actions/index.js";
import { getCountryName } from "../actions/index.js";


    
import "./styles/form.css"


function Form(){
    const [formValues, setFormValues] = useState(
        {
            name: "",
            dificulted: 0,
            duration: 0,
            season: "",
            country: ""
        }
    )

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActivity(formValues));
      }, [formValues, dispatch]);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        (function() {
            setFormValues({
                name: event.target[0].value,
                duration: event.target[1].value,
                dificulted: event.target[2].value,
                season: event.target[3].value,
            });

            event.target[0].value = "";
            event.target[1].value = "";
            event.target[2].value = "";
            event.target[3].value = "";
            event.target[4].value = "";
            
        })();
  
        
    }






//---------------------BUSQUEDA PARA AGREGAR PAÍS

const allCountries = useSelector(state => state.allCountries);
const [countrySearch, setcountrySearch] = useState("")

useEffect (()=>{
    dispatch(getCountryName(countrySearch));
   
},[dispatch, countrySearch])



const handleSubmit2 = (event) => {
        console.log("console mio",event)
        setFormValues({
            country: event.target.checked
        });
        
    
    
}



    return(
        <form onSubmit={(event) =>handleSubmit(event)}>
            <div className="background">
            <div className="formContainer">
                <div className="formList1">

                    <div className="form">
                    <label>Name:</label>
                    <input className="input"
                    name="name"
                    />
                    </div>
                        

                    <div className="form">
                    <label>Duration:</label>
                    <input className="input" 
                    name="duration"/>
                    </div>

                    <div className="form">
                    <label>Difficulty:</label>
                    <input className="input" 
                    type="number"
                    max={5}
                    min={1}

                    name="dificulted"/>
                    </div>
                </div>

                <div className="formList2">
                    <div>
                        <div className="form">
                        <label>Season:</label>
                        <input className="input" 
                        name="season"
                        />
                        </div>

                        <div className="form">
                        <label>Country :</label>
                        <input className="input" 
                        name="countrySelected"
                        onChange={(event)=>handleSubmit(event)}
                        />
                            
                        
                        </div>

                    <button 
                    className="buttonForm"
                    type="submit">
                        ¡Send new activity!
                    </button>

                    </div>
                </div>

                
            </div>
            </div>

            <div className="countrySelected">
                {allCountries.slice(0,4).map(e => {
                    return(
                        <div key={e.id}> 
                            {e.name}  
                            <img src={e.img} ></img>
                            <input 
                            type="checkbox" 
                            value={e.id} 
                            onClick={(event)=>handleSubmit2(event)}
                            ></input>                     
                        </div>
                        
                        
                    )
                  })}
            </div>

        </form>
    )
}

export {Form};
