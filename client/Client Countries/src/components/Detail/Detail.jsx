import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cleanDetail, getCountryDetail } from "../../redux/actions";

const CountryDetail = () => {
    const dispatch = useDispatch();
    const countryDetail = useSelector(state => state.countryDetail)
    const { id } = useParams();


    useEffect(() => {
        dispatch(getCountryDetail(id))
        return () => dispatch(cleanDetail())

    }, [id])
    const { name, flagImage, continent, capital,subregion,area,population} = countryDetail


    return (
        <div>
            <h1>Detail</h1>
            <h1>ID: {id}</h1>
            <h2>Name: {name}</h2>
            <img src={flagImage} alt={name} />
            <h2>Continent: {continent}</h2>
            <h2>Capital: {capital}</h2>
            {subregion&&<h2>Subregion: {subregion}</h2>}
            {area&&<h2>Area: {area}</h2>}
            <h2>Population: {population}</h2>



        </div>
    )
}

export default CountryDetail;