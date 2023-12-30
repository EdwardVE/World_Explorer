import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cleanDetail, getCountryDetail } from "../../redux/actions";
import styles from "./Detail.module.css"; 

const CountryDetail = () => {
    const dispatch = useDispatch();
    const countryDetail = useSelector(state => state.countryDetail)
    const { id } = useParams();

    useEffect(() => {
        dispatch(getCountryDetail(id))
        return () => dispatch(cleanDetail())
    }, [id,dispatch])


    const { name, flagImage, continent, capital,subregion,area,population,activities} = countryDetail
    console.log(activities)



    return (
        <div className={styles.container}>
        <button><Link to='/home'>HOME</Link></button>
        <h1>Detail</h1>
        <h1>ID: {id}</h1>
        <h2 className={styles.name}>Name: {name}</h2>
        <img src={flagImage} alt={name} />
        <h2>Continent: {continent}</h2>
        <h2>Capital: {capital}</h2>
        {subregion && <h2 className={styles.optionalInfo}>Subregion: {subregion}</h2>}
        {area && <h2 className={styles.optionalInfo}>Area: {area}</h2>}
        <h2>Population: {population}</h2>
            {activities && (
            <div className={styles.activities}>
                <h2>Activities:</h2>
                {activities.map((activity) => (
            <div className={styles.activityBox} key={activity.id}>
                <h3>Name: {activity.name} </h3>
                <h3> Difficulty: {activity.difficulty} </h3>
                <h3>Duration: {activity.duration} </h3>
                <h3>Season: {activity.season} </h3>
                
            </div>
            ))}
            </div>
            )}
        </div>
        )
}

export default CountryDetail;