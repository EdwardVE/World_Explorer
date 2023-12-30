
import { GET_COUNTRIES, GET_COUNTRY_DETAIL, CLEAN_DETAIL, ORDER, SEARCH_COUNTRY, SEARCH_COUNTRY_ERROR, GET_ACTIVITIES, FILTER_CONTINENT, FILTER_ACTIVITIES } from "./action-types";
import axios from "axios";
const URL_COUNTRIES='http://localhost:3001/countries'
const URL_ACTIVITIES='http://localhost:3001/activities'
export const getCountries = () => {
    return function(dispatch){
        axios(`${URL_COUNTRIES}`)
        .then(response => response.data)
        .then(data => dispatch({ type: GET_COUNTRIES, payload: data}))
    }
}
export const getCountryDetail = (id) => {
    return function(dispatch){
        axios(`${URL_COUNTRIES}/${id}`)
        .then(response => response.data)
        .then(data => dispatch({ type: GET_COUNTRY_DETAIL, payload: data}))
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}
export const searchCountry = (name) => {
    return function(dispatch){
        //console.log(name)
        axios(`${URL_COUNTRIES}/name/${name}`)
        .then(response => {
            if (response.status === 200) {
                dispatch({ type: SEARCH_COUNTRY_ERROR, payload: true })
                return response.data;
            }
        })
        .then(data =>  dispatch({ type: SEARCH_COUNTRY, payload: data }))
        .catch(error => {
            dispatch({ type: SEARCH_COUNTRY_ERROR, payload: false });
        });
    }
    //! if (!data)

}

export const filterContinent =(parameter)=>{
    return { type: FILTER_CONTINENT, payload: parameter }
}
export const orderCards = (orden) => {//!Paises en orden alfabetico, o Actividades
    return { type: ORDER, payload: orden }
}
export const getActivites = () => {
    // return function(dispatch){
    //     axios('http://localhost:3001/activities')
    //     .then(response => response.data)
    //     .then(data => dispatch({ type: GET_ACTIVITIES, payload: data }))
    // }
    return async (dispatch) => {
        try{
            const response = await axios.get(`${URL_ACTIVITIES}`)
            dispatch({ type: GET_ACTIVITIES, payload: response.data }) 

        }catch(error){
            alert(error.message) 
        }

    }

}
export const filterActivities =(parameter)=>{
    return { type: FILTER_ACTIVITIES, payload: parameter }
}
export const createActivity =(activity)=>{
    console.log(activity, 'Antes del post')
    return async (dispatch) => {
        try{
            await axios.post(`${URL_ACTIVITIES}`, activity)
        }catch(error){
            alert(error.message) 
        }

    }
}



//! Para enviar datos a la DB desde acá con POST
//? const response = await axios.get(URL) GET_COUNTRY_DETAIL
