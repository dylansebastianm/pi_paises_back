import { GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_ID, GET_COUNTRIES_NAME, POST_ACTIVITY } from './types';
import axios from "axios";

export const getCountries =()=> {

    try {
        return async function(dispatch) {
            let json = await axios.get('http://localhost:3001/countries');
            
            return dispatch({
                type: GET_COUNTRIES,
                payload: json.data
            })
        }
        
    } catch (error) {
        console.log(error);
        
    }
   
}


export const getActivities =()=> {
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/activities");
        return dispatch({
            type: GET_ACTIVITIES,
            payload: json.data
        })
    }

}

export const getCountryDetail =(id)=> {
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/countries/" + id);
        return dispatch({
            type: GET_COUNTRIES_ID,
            payload: json.data
        })
    }

}

export const getCountryName =(name)=> {
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/countries?name=' + name);
        return dispatch({
            type: GET_COUNTRIES_NAME,
            payload: json.data
        })
    }

}

export const postActivity =(payload)=> {
    return async function(dispatch){
        let json = await axios.post("http://localhost:3001/activity/post" , payload);
        console.log("console.log" , json)
        return dispatch({
            type: POST_ACTIVITY,
            payload: json.data
        })
    }
}
