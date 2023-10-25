
import { useDispatch, useSelector } from "react-redux";
import { filterContinent} from "../../redux/actions";


const FilterContinents = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.allCountries)

    const uniqueContinents = [];
    countries.forEach((country) => {//Busca todos los contienentes existentes en la DB
        if (!uniqueContinents.includes(country.continent)) {
            uniqueContinents.push(country.continent)}
    });

    const handleFilterContinents = (event)=>{
        console.log(event.target.value)
        return dispatch(filterContinent(event.target.value))//Con el nombre del continente filtra los paises
    }
    console.log(countries, "aCÁ VAN CONUTRIES DEL CONTINENT")
    
    
    return (
        <span>
            <select  onChange={handleFilterContinents }>
                <option value={'Continent:'}>Continent:</option>
                {uniqueContinents.map((continente, index) => (//Muestra de manera dinamica los continentes como una opción
                <option key={index} value={continente}>
                    {continente}
                </option>
                ))}
            </select>
        </span>
    )
}
export default FilterContinents;