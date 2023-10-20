import { Link } from "react-router-dom";
import styles from './CardCountry.module.css';

const CardCountry = ({id, flagImage, name, continent }) => {
    return (
        <div className={styles.card} >
            <img className={styles.image} src={flagImage} alt={name}/>
            <Link to={`/detail/${id}`}><h2 className={styles.title} >{name}</h2></Link>
            <h2 className={styles.description} >{continent}</h2>
        </div>
    )
}
export default CardCountry;