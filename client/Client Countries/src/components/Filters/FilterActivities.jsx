import { useDispatch, useSelector } from "react-redux";



const Filter = () => {
    //!const dispatch = useDispatch();
    const activities = useSelector(state => state.activities)
    const uniqueActivities = [];
    activities.forEach((activity) => {
        if (!uniqueActivities.includes(activity.name)) {
            uniqueActivities.push(activity.name)}
    });
    console.log(uniqueActivities)
    const handleFilterActivities = (event)=>{
        console.log(event.target.value)
        console.log(activities)
    }
    
    return (
        <span>
            <span> Activities: </span>
            <select  onChange={handleFilterActivities}>
                {uniqueActivities.map((name, id) => (
                <option key={id} value={name}>
                    {name}
                </option>
                ))} 
            </select>

        </span>
    )
}
export default Filter;