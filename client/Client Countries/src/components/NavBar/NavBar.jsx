import { Link } from "react-router-dom";
import styles from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar";
import Order from "../Order/Order";
import Filters from "../Filters/Filters";

const NavBar = ()=> {

    return (
        <label className={styles.Nav} >
        <SearchBar/>
        <p></p>
        <button><Link to='/activities'>Create Activities</Link></button>
        <hr />
        <div> <span>Order: <Order/></span>
        <span>   Filters <Filters/> </span></div>
        </label>
    )
}
export default NavBar;