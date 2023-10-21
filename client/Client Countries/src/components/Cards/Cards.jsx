import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivites, getCountries } from "../../redux/actions";
import CardCountry from "../CardCountry/CardCountry";




const Cards = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivites())
    }, [dispatch])



    return (
        <div >

            {
                countries.map(country => {
                    return (
                        <CardCountry
                            key={country.id}
                            id={country.id}
                            flagImage={country.flagImage}
                            name={country.name}
                            continent={country.continent}
                        />
                    )
                })
            }


        </div>
    )
}

export default Cards;