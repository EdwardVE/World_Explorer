//import { GET_COUNTRIES, GET_COUNTRY_DETAIL, CLEAN_DETAIL, GET_ACTIVITIES } from "./action-types";

import { CLEAN_DETAIL, FILTER, GET_COUNTRIES, GET_COUNTRY_DETAIL, ORDER } from "./action-types";

const initialState = {
    countries: [],
    countryDetail: {},
    Activities: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                countryDetail: {}
            }
        case ORDER:
            const copiAllCountries = [...state.countries]//Copia de all characters
            return {
                ...state,
                myFavorites: action.payload === 'A' 
                ? copiAllCountries.sort((a,b)=> a.id - b.id)//! pregunta si el id de A es menor que B
                : copiAllCountries.sort((a,b)=> b.id - a.id )//! pregunta si el id de B es menor que A
            }



        default:
            return {...state}
    }
}

export default reducer;