const { controllerGetAllCryptos } = require("../controllers/cryptoControllers");

// const handlerGetDriverByName = async (req, res) => {
//   const { name } = req.query;
  
//   if (!name || typeof name !== "string" || name.trim() === "") {
//     return res.status(400).json({message:"Debes introducir un nombre válido"})
//   }

//   try {

//     const driversFound = await controllerGetDriverByName(name);

//     if (driversFound.length === 0) {
//       return res.status(404).json({message: "No existen pilotos con ese nombre"});
//     }

//     res.status(200).json(driversFound)
//   } catch (error) {
//     res.status(400).json({error: error.message})
//   }

// };


// Handler para requerir un piloto por ID (API || BD)
// const handlerGetDriverById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const response = await controllerGetDriverById(id); 
    
//     res.status(200).json(response);
//   } catch (error) {
//     console.error(error)
//     res.status(400).json({ error: error.message });
//   }
  
// };

const handlerGetAllCryptos = async (req, res) => {

  try {
    const response = await controllerGetAllCryptos();
    
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};


// // Handler para crear un nuevo piloto (BD)
// const handlerCreateNewDriver = async (req, res) => {
//   try {

//   const { forename, surname, description, image, nationality, dob, teams } = req.body;
  
//     if (!forename || !surname || !nationality || !dob || !teams) {
//       return res.status(400).json({status: "Se necesita información completa"})
//     } 

//     const response = await controllerCreateNewDriver(
//       forename,
//       surname,
//       description,
//       image,
//       nationality,
//       dob,
//       teams,
//     );
    

//     res.status(200).json(response);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const handlerGetAllNationalities = async (req, res) => {
//   try {
//     const response = await controllerGetAllNationalities();

//     res.status(200).json(response);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: error.message });
//   }
// };
// const handlerGetLocalNationalities = async (req, res) => {
//   try {
//     const response = await controllerGetLocalNationalities();

//     res.status(200).json(response);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: error.message });
//   }
// };
// const handlerGetFlagByDriver = async (req, res) => {

//   const { id } = req.params;
  
//   try {
//     const response = await controllerGetFlagByDriver(id);

//     res.status(200).json(response);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: error.message });
//   }
// };


module.exports = {
  handlerGetAllCryptos,
};
