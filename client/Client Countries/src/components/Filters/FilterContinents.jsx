
import { useDispatch, useSelector } from "react-redux";
import { filterContinent} from "../../redux/actions";


const FilterContinents = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.allCountries)

    const uniqueContinents = [];
    countries.forEach((country) => {
        if (!uniqueContinents.includes(country.continent)) {
            uniqueContinents.push(country.continent)}
    });

    const handleFilterContinents = (event)=>{
        console.log(event.target.value)
        return dispatch(filterContinent(event.target.value))
    }
    
    
    return (
        <span>
            <span> Continent: </span>
            <select  onChange={handleFilterContinents }>
                {uniqueContinents.map((continente, index) => (
                <option key={index} value={continente}>
                    {continente}
                </option>
                ))}
            </select>
        </span>
    )
}
export default FilterContinents;