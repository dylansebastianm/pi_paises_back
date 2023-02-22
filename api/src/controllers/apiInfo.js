const axios = require('axios');
const {Country, Activity} = require("../db.js")


 async function getApiInfo (){
    try{
        const API = await axios.get("https://restcountries.com/v3/all");
     

       let countriesMap = API.data.map(e=> ({
                id: e.cca3 !== null ? e.cca3 : "No se encontro el ID",
                name: e.name.common !== null ? e.name.common : "No se encontro nombre",
                img: e.flags !== null ? e.flags[1] : "No se encontro la imagen",
                continent: e.region !== null ? e.region : "No se encontro continente",
                capital: typeof e.capital !== "undefined" ? e.capital[0]: "No se encontro la capital",
                subregion: e.subregion !== null ? e.subregion : "No se encontro subregión",
                area: e.area,
                population: e.population,

        }))
        await Country.bulkCreate(countriesMap)
        console.log("paises cargados correctamente") 

    } catch(error) {
        console.log(error)
    }}

    const dbInfo = async () => {
      return await Country.findAll({
        include: {
          model: Activity,
          atrributes: ["name" ,"dificulted", "duration", "season" ,"id"],
          through: { attributes: []},
                
        }})}
    console.log("paises cargados correctamente")

    
module.exports = {
  getApiInfo,
  dbInfo,  
}