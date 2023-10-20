import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import CardCountry from "../CardCountry/CardCountry";
import styles from './Countries.module.css';



const Countries = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])



    return (
        <div className={styles.countries_container} >
            <h1>Countries</h1>

                <hr />
            <div>
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


        </div>
    )
}

export default Countries;



