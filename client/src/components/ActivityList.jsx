import React, { useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { getActivities } from "../actions/index.js";
import {CardActivity} from "./CardActivity";
import "./styles/cardList.css"

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
                                id = {e.id}
                                duration = {e.duration}
                                season = {e.season}
                                dificulted = {e.dificulted}
                                countryId = {e.countryId}
                           
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
