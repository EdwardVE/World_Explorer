import { useDispatch } from "react-redux";
import { filterCards } from "../../redux/actions";


const Filter = () => {
    const dispatch = useDispatch();
    const handleFilter = (event)=>{
        return dispatch(filterCards(event.target.value))
    }
    return (
        <div>
            <select  onChange={handleFilter}>
<option value="continent">Continent</option>
<option value="activity">Activity</option>
</select>
        </div>
    )
}
export default Filter;