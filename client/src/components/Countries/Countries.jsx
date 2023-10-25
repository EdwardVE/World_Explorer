import styles from './Countries.module.css';
import NavBar from "../NavBar/NavBar";
import Cards from '../Cards/Cards';



const Countries = () => {


    return (
        <div className={styles.countries_container} >
            <h1 className={styles.title}>HOME</h1>
            <hr />
            <NavBar/>
            <hr />
            <Cards/>

        </div>
    )
}

export default Countries;



