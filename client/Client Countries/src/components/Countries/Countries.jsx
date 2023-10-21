import styles from './Countries.module.css';
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";



const Countries = () => {
    return (
        <div className={styles.countries_container} >
            <h1 className={styles.title}>HOME</h1>
            <hr />
            <NavBar/>
            <hr />
            <Cards/>
                {/* //! 2 estados para la pg menor y mayor, una const qye me dice donde comienda y donde termina, pasar el pagina inicial y final, sa hace con  */}
        </div>
    )
}

export default Countries;



