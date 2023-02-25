import React, { useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { getActivities } from "../actions/index.js";
import {CardActivity} from "./CardActivity";
/* import "./styles/activityList.css"/*  */
 

function ActivityList(){
  const allActivities = useSelector(state => state.allActivities);
  
   
    const dispatch = useDispatch();


    useEffect (()=>{
        dispatch(getActivities());
       
    },[dispatch])


    return (
    
        <div >
            <div className="activityList">
                {allActivities.map(e => {
                    return(
                        <div>
                            <CardActivity 
                                name ={e.name}
                                duration = {e.duration}
                                season = {e.season}
                                dificulted = {e.dificulted}
                                country = {e.countries[0].name}
                                countryImg = {e.countries[0].img}                          
                            >
                            </CardActivity>
                        </div>
                        
                    )
                  })}
            </div>
        </div>
  
    )

}

export {ActivityList};
