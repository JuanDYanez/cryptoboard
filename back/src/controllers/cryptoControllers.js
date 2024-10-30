const axios = require('axios');
require("dotenv").config();

const tuneCoin = require("../../api/tuneCoin.json");

const {API_KEY} = process.env;
const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=${API_KEY}`;

// Controller para pedir las primeras 50 coins
const controllerGetAllCryptos = async () => {
  const options = {
    method: 'GET',
    url: url+'&per_page=49',
    header: {accept: 'application/json'}
  }

  // Script para generar variaciones aleatorias para el `current_price` y `market_cap` de la nueva Tune Coin
  setInterval(() => {
    
    const priceChange = (Math.random() * 2 - 1) * 100;
    const marketCapChange = (Math.random() * 2 - 1) * 100000000;
  
    tuneCoin.current_price = Math.max(1, tuneCoin.current_price + priceChange);
    tuneCoin.market_cap = Math.max(1, tuneCoin.market_cap + marketCapChange);
  }, 60000);

  try {
    const response = await axios.request(options)
    
    response.data.unshift(tuneCoin)
    
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

module.exports = {
  controllerGetAllCryptos,
  controllerGetCryptoById,
  controllerGetCryptoByName
};