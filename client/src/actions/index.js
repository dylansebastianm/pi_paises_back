import { GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRIES_ID } from './types';
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
        let json = await axios.get("http://localhost:3001/actividades" + id);
        return dispatch({
            type: GET_COUNTRIES_ID,
            payload: json.data
        })
    }

}
