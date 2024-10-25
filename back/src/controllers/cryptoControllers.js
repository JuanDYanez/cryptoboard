const axios = require('axios');
require("dotenv").config();

const {API_KEY} = process.env;
const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&x_cg_demo_api_key=${API_KEY}`;
// const options = {method: 'GET', headers: {accept: 'application/json'}};

const controllerGetAllCryptos = async () => {
  try {
    const res = await axios.get(url);
    const allCryptos = res.data;
    
    console.log(allCryptos);
    
    // .data.map((driver) => {

    //   const parseImg = () => {
    //     let driverURL;
    //     if (driver.image.url === "") {
    //       driverURL = "../../../nopicdriver.jpg";
    //     } else if (driver.image.url === "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png") {
    //       driverURL = "../../../nopicdriver.jpg"
    //     } else if (driver.image.url === "https://upload.wikimedia.org/wikipedia/commons/b/b3/Ricardo_Rosset_at_1997_Australian_Grand_Prix.jpg"){
    //       driverURL = "../../../nopicdriver.jpg";
    //     } else {
    //       driverURL = driver.image.url
    //     }
    //     return driverURL;
    //   };

    //   const parseTeams = () => {
        
    //     if (driver.teams?.includes(',')) {
    //       return driver.teams.split(',').map((team) => team.trim()).join(', ');
    //     } else {
    //       return driver.teams;
    //     }
        
    //   };

    //   const parseDescription = () => {
    //     if (driver.description === "." || driver.description === undefined) {
    //       return "Sin información adicional"
    //     } else {
    //       return driver.description;
    //     }
    //   };

    //   return {
    //     id: driver.id,
    //     forename: driver.name.forename,
    //     surname: driver.name.surname,
    //     description: parseDescription(),
    //     image: parseImg(),
    //     nationality: driver.nationality,
    //     dob: driver.dob,
    //     teams: parseTeams() || "No registra escuderías",
    //     createdInDB: false,
    //   };
    // });

    return allCryptos;
  } catch (error) {
    console.error('error:'+ error);
    
    throw new Error(error);
  }
};

// // Controller para requerir un piloto por ID (API || BD)
// const controllerGetDriverById = async (id) => {
  
//   try {
//     const allDrivers = await controllerGetAllDrivers();

//     const driverFound = await allDrivers.find(driver => driver.id == id)

//     return driverFound;
    
//   } catch (error) {
//     throw new Error("Error al consultar el piloto requerido");
//   }
  
// };

// const controllerGetFlagByDriver = async (id) => {
//   try {
//     const driverNationality = (await controllerGetDriverById(id)).nationality;
//     const { data } = await axios.get("https://restcountries.com/v3.1/all");

//     const flagByNationality = (driverNationality) => {
//       const foundCountry = data.find(
//         (country) => country.demonyms?.eng.m === driverNationality
//       );

//       return foundCountry ? foundCountry.flags.svg : foundCountry;
//     };

//     return flagByNationality(driverNationality);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };


// const controllerGetDriverByName = async (name) => {
  
//   try {
//     const allDrivers = await controllerGetAllDrivers();
    
//     const filteredDrivers = allDrivers.filter(driver => {
//       const filterByForename = driver.forename.toLowerCase().includes(name.toLowerCase())
//       const filterBySurname = driver.surname.toLowerCase().includes(name.toLowerCase())

//       return filterByForename || filterBySurname;
//     })

//     return filteredDrivers.slice(0,15)
//   } catch (error) {
//     throw new Error (error)
//   }




// const controllerGetAllNationalities = async () => {
  
//   try {

//     const { data } = await axios.get("https://restcountries.com/v3.1/all");

//     const allNationalities = data.map((country) => country.demonyms?.eng.m);

//     const uniqueNationalities = [...new Set(allNationalities)].sort((a, b) => {
//       return a.localeCompare(b)
//     });

//     return uniqueNationalities;

//   } catch (error) {
//     throw new Error(error.message);    

//   }
// };
// const controllerGetLocalNationalities = async () => {
  
//   try {

//     const { data } = await axios.get("http://localhost:3001/drivers");

//     const allNationalities = data.map((driver) => driver.nationality);

//     const uniqueNationalities = [...new Set(allNationalities)].sort((a, b) => {
//       return a.localeCompare(b)
//     });

//     return uniqueNationalities;

//   } catch (error) {
//     throw new Error(error.message);    

//   }

// };


module.exports = {
  controllerGetAllCryptos,
};