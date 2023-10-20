const { createActivitiesDB ,getactivitiesDB } = require("../controllers/activitiesController");

const createActivitiesHandler = async (req, res) =>{//Body//! Manejar asincronía async - await
    const {id, name, difficulty, duration, season, countries}= req.body;
    //countries = ['col','per']
    try{
        
        const newActivity = await createActivitiesDB(id, name, difficulty, duration, season, countries)
        
        res.status(200).json(newActivity);


    } catch(error){
            res.status(400).json({error: "Error al Crear Actividad " + error.message})
    }
}

const getActivitiesHandler = async (req, res) =>{//Body
    const{name}= req.body;  
    //res.status(200).send(`Vamo GET Activities: ${name}`);
        try {
            const activities = await getactivitiesDB()
            res.status(200).json(activities);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener las actividades turísticas" + error.message});
        }
};



module.exports = {
    createActivitiesHandler,
    getActivitiesHandler
};