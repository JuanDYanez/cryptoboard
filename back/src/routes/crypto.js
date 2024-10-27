const { Router } = require("express");
const { handlerGetAllCryptos, handlerGetCryptoById, handlerGetCryptoByName } = require("../handlers/cryptoHandlers");

const cryptoRouter = Router();

cryptoRouter.get("/allCryptos", handlerGetAllCryptos);
cryptoRouter.get("/filter/:id", handlerGetCryptoById);
cryptoRouter.get("/search/name", handlerGetCryptoByName);

module.exports = cryptoRouter;
