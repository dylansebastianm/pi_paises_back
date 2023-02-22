import React, { useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { postActivity } from "../actions/index.js";

    
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
                country: event.target[4].value,
            });
        })();
  
        
    }

    return(
        <form onSubmit={(event) =>handleSubmit(event)}>
            <div className="formContainer">
                <div className="formList">

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
                    name="dificulted"/>
                    </div>

                    <div className="form">
                    <label>Season:</label>
                    <input className="input" 
                    name="season"
                    />
                    </div>

                    <div className="form">
                    <label>Country :</label>
                    <input className="input" 
                    name="countrySelected"/>
                    </div>

                </div>

                <button 
                    className="buttonForm"
                    type="submit">
                        Create
                </button>
            </div>
        
        </form>
    )
}

export {Form};
