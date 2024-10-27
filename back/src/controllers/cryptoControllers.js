const axios = require('axios');
require("dotenv").config();

const {API_KEY} = process.env;
const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=${API_KEY}`;

// Controller para pedir las primeras 50 coins
const controllerGetAllCryptos = async () => {
  const options = {
    method: 'GET',
    url: url+'&per_page=50',
    header: {accept: 'application/json'}
  }

  try {
    const response = await axios.request(options)
    
    return response.data;  
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

  } catch (error) {
    console.error('error:'+ error);
    
    throw new Error(error);
  }
};

// Controller para pedir el detalle de una coin por ID
const controllerGetCryptoById = async (id) => {

  try {
    const allCryptos = await controllerGetAllCryptos(); 

    const cryptosFound = await allCryptos.find(crypto => crypto.id == id || crypto.symbol == id)

    if (cryptosFound.length === 0) {
      console.error("No se encontraron cryptos");
    }

    return cryptosFound
  } catch (error) {
    throw new Error("No se encontraron cryptos");
  }
  
};

//Controller para pedir el detalle de una crypto por nombre
const controllerGetCryptoByName = async (name) => {
  
  try {
    const allCryptos = await controllerGetAllCryptos();
    
    console.log("Nombre a buscar:", name);
       
    const filteredCryptos = allCryptos.filter(crypto => 
      crypto.name.toLowerCase().includes(name.toLowerCase())
    )

    return filteredCryptos
  } catch (error) {
    throw new Error (error)
  }
}
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
  controllerGetCryptoById,
  controllerGetCryptoByName
};