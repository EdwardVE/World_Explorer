import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createActivity, getCountries } from "../../redux/actions";
import styles from "./Activities.module.css"; // Importa tus estilos
import { Link, useNavigate } from "react-router-dom";

const Activities = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const countries = useSelector(state => state.allCountries)
    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])


    // Estado para almacenar los valores del formulario
    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    });

    // Estado para almacenar los errores de validación
    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: "",
    });

    // Función para manejar cambios en los campos del formulario
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log('name: '+name, 'value: '+ value);
        if (name === 'countries'){
            console.log('VA COUNTRIES del handle change')
            setActivity({
                ...activity,
                [name]: [...activity.countries, value]
            }
            );
        }else{
            setActivity({
                ...activity,
                [name]: value,
            });
        }
        setErrors(validate());
    };
    console.log(activity)

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("PAra hacer SUBMIT",event)
        dispatch(createActivity(activity))
        alert('Se Creó la actividad: '+ activity.name)
        navigate('/home');
        // Aquí debes manejar la lógica de envío del formulario
    };

    // Función para realizar la validación de los campos
    const validate = () => {
        console.log('Entra a ERRORS')
        const error = {};
        if (activity.name.trim() === "") {
            error.name = "Nombre es requerido";
        }
    
        if (!/^[A-Za-z\s]+$/.test(activity.name)) {
            error.name = "El nombre debe contener solo letras y espacios";
        }
    
        if (isNaN(activity.difficulty) || activity.difficulty.trim() === '') {
            error.difficulty = "Agregue la Dificultad";
        }
    
        if (isNaN(activity.duration) || activity.duration <= 0) {
            error.duration = "La duración debe ser un número mayor que cero";
        }
        
        if (activity.season.length<=0) {
            error.season = "Agregue una temporada"+ activity.season.length;
        }
        if (activity.countries.length===0) {
            error.countries = "Agregar Pais";
        }

        return error;
    };
    const handleDeleteCountry = (countryId) => {
        const updatedCountries = activity.countries.filter((id) => id !== countryId);
        setActivity({
            ...activity,
            countries: updatedCountries,
        });
    };

    return (
        <div>
            <h1 className={styles.formTitle}>ACTIVIDADES</h1>
            <button><Link to='/home'>HOME</Link></button>
            <form onSubmit={handleSubmit} className={styles.formContainer} >
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <input
                        type="text"
                        name="name"
                        value={activity.name}
                        onChange={handleChange}
                    />
                    {errors.name && (<span style={{ color: "red" }}>{errors?.name}</span>)}
                </div>

                <div>
                <label htmlFor="difficulty">Dificultad: </label>
                    <select
                        name="difficulty"
                        value={activity.difficulty}
                        onChange={handleChange}
                        multiple={false}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    {errors.difficulty && (<span className={styles.error}>{errors?.difficulty}</span>)}
                </div>

                <div>
                    <label htmlFor="duration">Duración: </label>
                    <input
                        type="text"
                        name="duration"
                        value={activity.duration}
                        onChange={handleChange}
                    />
                    {errors.duration && (<span className={styles.error} >{errors?.duration}</span>)}
                </div>

                <div>
                <label htmlFor="season">Temporada: </label>
                    <select
                        name="season"
                        value={activity.season}
                        onChange={handleChange}
                        multiple={false}
                    >
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                    {errors.season && (<span className={styles.error}>{errors?.season}</span>)}
                </div>

                <div>
                    <label htmlFor="countries">Países: </label>
                    <select
                            name="countries"
                            value={activity.countries}
                            onChange={handleChange}
                        >
                            {countries.map((country, index) => (
                            <option key={index} value={country.id}>
                                {country.name}
                            </option>
                            ))}
                    </select>
                    {errors.countries && (<span className={styles.error}>{errors?.countries}</span>)}
                </div>
                <div>

                    <hr />
                </div>
                <button type="submit" disabled= {Object.values(errors).some(error => error !== "")} >Guardar</button>
                <div>
                    <hr />
                    {countries
                        .filter(country => activity.countries.includes(country.id))
                        .map(country => <div>
                            <label key={country.id}>{country.name}        </label> 
                            <button type="button" onClick={() => handleDeleteCountry(country.id)}>Delete</button>
                            
                            
                        </div>
                        
                        )
                    }
                </div>
            </form>
        </div>
    );
};

export default Activities;
