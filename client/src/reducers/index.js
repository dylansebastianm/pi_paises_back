import { 
    GET_COUNTRIES,
    GET_COUNTRIES_ID,
    GET_ACTIVITIES,
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
         
}}

export default rootReducer;