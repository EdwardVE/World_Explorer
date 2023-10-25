import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivites, getCountries } from "../../redux/actions";
import CardCountry from "../CardCountry/CardCountry";




const Cards = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize =10
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const countriesToDisplay = countries.slice(startIndex, endIndex);
    const totalPages = Math.ceil(countries.length / pageSize);
    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivites())
        //setCurrentPage(1)
        //return () => dispatch(cleanDetail())
    }, [dispatch]);
    console.log('Los paises de las Cards', countries)
    useEffect(() => {
        setCurrentPage(1)
    }
    ,[totalPages])

    
        return (
        <div>
            <div>
            <button onClick={() => {if (currentPage > 1) setCurrentPage(currentPage - 1)}}>
                Anterior
            </button>
            <span> Página {currentPage} de {totalPages} </span>
            <button onClick={() => {if (currentPage < totalPages) setCurrentPage(currentPage + 1)}}>
                Siguiente
            </button>
            </div>
            
            {countriesToDisplay.map((country) => (
                <CardCountry
                    key={country.id}
                    id={country.id}
                    flagImage={country.flagImage}
                    name={country.name}
                    continent={country.continent}
                    activities={country.activities}
                />
            ))}
        </div>
        );
    };

export default Cards;