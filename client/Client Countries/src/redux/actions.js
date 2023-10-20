
import { GET_COUNTRIES, GET_COUNTRY_DETAIL, CLEAN_DETAIL, ORDER, FILTER } from "./action-types";
import axios from "axios";

export const getCountries = () => {
    return function(dispatch){
        axios('http://localhost:3001/countries')
        .then(response => response.data)
        .then(data => dispatch({ type: GET_COUNTRIES, payload: data}))
    }
}
export const getCountryDetail = (id) => {
    return function(dispatch){
        axios(`http://localhost:3001/countries/${id}`)
        .then(response => response.data)
        .then(data => dispatch({ type: GET_COUNTRY_DETAIL, payload: data}))
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}
export const filterCards =(parameter)=>{
    return { type: FILTER, payload: parameter }
}
export const orderCards = (orden) => {//!Paises en orden alfabetico, o Actividades
    return { type: ORDER, payload: orden }
}



//! Para enviar datos a la DB desde acá con POST
//? const response = await axios.get(URL) GET_COUNTRY_DETAIL
