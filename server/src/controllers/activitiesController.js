const {Activity,Country} = require('../db')

const createActivitiesDB = async (id, name, difficulty, duration, season, countries) => {
    console.log("CREANDO ACTIVITY")
    try{
        console.log(countries)
        const newActivity= await Activity.create({id, name, difficulty, duration, season, countries})
        if (countries){
            const arrayContries = await Country.findAll({
                where: {id: countries}
            })
            await newActivity.addCountries(arrayContries)
        }
        return newActivity

    }
    catch(error){
        throw error
    }
}

const getactivitiesDB = async () => {
    console.log("GET ACTIVITY")
    const activitiesDB = await Activity.findAll({include: [{model: Country, as: "countries"}]})
    return activitiesDB 
}




module.exports = {
    createActivitiesDB,
    getactivitiesDB
}