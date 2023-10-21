import { CLEAN_DETAIL, FILTER_ACTIVITIES, FILTER_CONTINENT, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRY_DETAIL, ORDER, SEARCH_COUNTRY, SEARCH_COUNTRY_ERROR } from "./action-types";
import { getActivites, getCountries } from "./actions";

const initialState = {
    countries: [],
    allCountries: [],
    countryDetail: {},
    activities: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload

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
        case SEARCH_COUNTRY:
            return {
                ...state,
                countries: action.payload
            }
            
        case SEARCH_COUNTRY_ERROR:
                return {
                ...state,
                error: action.payload
            }
        case ORDER:
            const copiAllCountries = [...state.countries]//Copia de all characters
            const orden =(payload) => {
                if(payload==='A') copiAllCountries.sort((a, b) => a.name.localeCompare(b.name))
                if(payload==='B') copiAllCountries.sort((a, b) => b.name.localeCompare(a.name))
                if (payload === 'populationA') copiAllCountries.sort((a, b) => a.population - b.population)
                if (payload === 'populationB') copiAllCountries.sort((a, b) => b.population - a.population)

            }
            orden(action.payload)
            console.log(copiAllCountries)
            return {
                ...state,
                countries: copiAllCountries

            }
        case FILTER_CONTINENT:
            getCountries()
            const filterContinent = state.allCountries.filter(country => country.continent === action.payload)
            console.log(state)

            return{
                ...state,
                countries: filterContinent
                
            }
        case GET_ACTIVITIES:
            console.log('Acá deberian estar las actividades',action.payload)
            return{
                ...state,
                activities: action.payload
            }
    
        case FILTER_ACTIVITIES:
            getCountries()
            getActivites()
                    // const filterContinent = state.allCountries.filter(country => country.continent === action.payload)
                    // console.log(state)
            return{
                ...state,
                        
            }


        default:
            return {...state}
    }
}

export default reducer;