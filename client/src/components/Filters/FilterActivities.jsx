import { useDispatch, useSelector } from "react-redux";
import { filterActivities } from "../../redux/actions";



const FilterActivities = () => {
    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities)
    const uniqueActivities = [];
    activities.forEach((activity) => {
        if (!uniqueActivities.includes(activity.name)) {
            uniqueActivities.push(activity.name)}
    });
    //console.log(uniqueActivities)
    const handleFilterActivities = (event)=>{
        // console.log(event.target.value)
        // console.log(activities)
        return dispatch(filterActivities(event.target.value))
    }
    
    return (
        <span>
            
            <select  onChange={handleFilterActivities}>
                <option value={'Activities:'} > Activities: </option>
                {uniqueActivities.map((name, id) => (
                <option key={id} value={name}>
                    {name}
                </option>
                ))} 
            </select>

        </span>
    )
}
export default FilterActivities;