import React, { useState } from "react";

const Activities = () => {
    // Estado para almacenar los valores del formulario
    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: "",
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
        setActivity({
            ...activity,
            [name]: value,
        });
        setErrors(validate());
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí debes manejar la lógica de envío del formulario
    };

    // Función para realizar la validación de los campos
    const validate = () => {
        const error = {};
        if (activity.name.trim() === "") {
            error.name = "Nombre es requerido";
        }
    
        if (!/^[A-Za-z\s]+$/.test(activity.name)) {
            error.name = "El nombre debe contener solo letras y espacios";
        }
    
        if (isNaN(activity.difficulty) || activity.difficulty < 1 || activity.difficulty > 5) {
            error.difficulty = "La dificultad debe ser un número entre 1 y 5";
        }
    
        if (isNaN(activity.duration) || activity.duration <= 0) {
            error.duration = "La duración debe ser un número mayor que cero";
        }
    
        if (!["Verano", "Otoño", "Invierno", "Primavera"].includes(activity.season)) {
            error.season = "La temporada debe ser 'Verano', 'Otoño', 'Invierno' o 'Primavera'";
        }
        if (!activity.countries) {
            error.countries = "Agregar Pais";
        }

        return error;
    };

    return (
        <div>
            <h1>ACTIVIDADES</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <input
                        type="text"
                        name="name"
                        value={activity.name}
                        onChange={handleChange}
                    />
                    {errors.name && (<span style={{ color: "red" }}>{errors.name}</span>)}
                </div>

                <div>
                    <label htmlFor="difficulty">Dificultad: </label>
                    <input
                        type="text"
                        name="difficulty"
                        value={activity.difficulty}
                        onChange={handleChange}
                    />
                    {errors.difficulty && (<span style={{ color: "red" }}>{errors.difficulty}</span>)}
                </div>

                <div>
                    <label htmlFor="duration">Duración: </label>
                    <input
                        type="text"
                        name="duration"
                        value={activity.duration}
                        onChange={handleChange}
                    />
                    {errors.duration && (<span style={{ color: "red" }}>{errors.duration}</span>)}
                </div>

                <div>
                    <label htmlFor="season">Temporada: </label>
                    <input
                        type="text"
                        name="season"
                        value={activity.season}
                        onChange={handleChange}
                    />
                    {errors.season && (<span style={{ color: "red" }}>{errors.season}</span>)}
                </div>

                <div>
                    <label htmlFor="countries">Países: </label>
                    <input
                        type="text"
                        name="countries"
                        value={activity.countries}
                        onChange={handleChange}
                    />
                    {errors.countries && (<span style={{ color: "red" }}>{errors.countries}</span>)}
                </div>

                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default Activities;
