import { 
    GET_COUNTRIES,
    GET_COUNTRIES_ID,
    GET_ACTIVITIES,
    GET_COUNTRIES_NAME,
    POST_ACTIVITY,
} from "../actions/types";

const initialState = {
    allCountries: [],
    countries:[],
    allActivities: [],
    countryDetail: [],
    
}

const rootReducer = (state = initialState , action) => {
    switch(action.type){
        case GET_COUNTRIES:
            console.log('GET_COUNTRIES action called with payload:', action.payload);
            return{
                ...state,
                allCountries: action.payload,
                countries: action.payload,
                
            }
            
         
        case GET_COUNTRIES_ID:
            return{
                countryDetail: action.payload,
                
            }
         
        case GET_ACTIVITIES:
            return{
                ...state,
                allActivities: action.payload,
                
            }
        case GET_COUNTRIES_NAME:
            return{
                ...state,
                allCountries: action.payload,
                
            }

        case POST_ACTIVITY:
            return{
                ...state,
                allActivities: action.payload,
                    
            }
            default: return{...state} 
         
}}

export default rootReducer;