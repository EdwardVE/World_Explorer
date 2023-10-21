import { orderCards } from "../../redux/actions"
import { useDispatch } from "react-redux";




const Order = () => {
    const dispatch = useDispatch();
    const handleOrder = (event) => {
        return dispatch(orderCards(event.target.value))
    }

    return (
        <span>
            <select onChange={handleOrder} >
            <option value="A">Alphabetical Ascendant</option>
            <option value="B">Alphabetical Descending</option>
            <option value="populationA">Population Ascendant</option>
            <option value="populationB">Population Descending</option>
            </select>
        </span>
    )
}
export default Order;