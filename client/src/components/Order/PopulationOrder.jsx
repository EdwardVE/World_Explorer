import { orderCards } from "../../redux/actions"
import { useDispatch } from "react-redux";




const PopulationOrder = () => {
    const dispatch = useDispatch();
    const handleOrder = (event) => {
        return dispatch(orderCards(event.target.value))
    }

    return (
        <span>
            <select onChange={handleOrder}>
                <option >Population:</option>
                <option value="populationA">Ascendant{' [↑]'}</option>
                <option value="populationB">Descending{' [↓]'}</option>
            </select>
        </span>
    )
}
export default PopulationOrder;