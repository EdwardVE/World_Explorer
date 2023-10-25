import { CLEAN_DETAIL, CREATE_ACTIVITIES, FILTER_ACTIVITIES, FILTER_CONTINENT, GET_ACTIVITIES, GET_COUNTRIES, GET_COUNTRY_DETAIL, ORDER, SEARCH_COUNTRY, SEARCH_COUNTRY_ERROR } from "./action-types";

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
            //!Pasarlo a la acción
            const filterContinent = state.allCountries.filter(country => country.continent === action.payload)
            let countries = filterContinent.length === 0 ? state.allCountries : filterContinent;

            return{
                ...state,
                countries
                
            }
        case GET_ACTIVITIES:
            //console.log('Acá deberian estar las actividades',action.payload)
            return{
                ...state,
                activities: action.payload
            }
    
        case FILTER_ACTIVITIES:
            //!Pasarlo a la acción
            const arrayOnlyActivity = state.activities.filter(activity => activity.name === action.payload)
            const countriesByActivity = arrayOnlyActivity.map (activity => activity.countries).flat()
            let uniqueCountriesArray = [];
            const seenIds = [];
            countriesByActivity.forEach(country => {
                // Comprueba si el ID del país no está en el array seenIds
                if (!seenIds.includes(country.id)) {
                    // Si el ID del país no se ha visto antes, agrega el país a uniqueCountriesArray
                    uniqueCountriesArray.push(country);
                    // Registra el ID del país en seenIds para evitar duplicados
                    seenIds.push(country.id);
                }
            });
            console.log(uniqueCountriesArray);
            if(uniqueCountriesArray.length === 0) uniqueCountriesArray=state.allCountries
            return{
                ...state,
                countries: [...uniqueCountriesArray]

            }
        case CREATE_ACTIVITIES:
            console.log(...state.activities, 'Este es LA ACTIVITY',action.payload);
            return{
                ...state,
            }
        default:
            return {...state}
    }
}

export default reducer;