const { Router } = require("express");
const { handlerGetAllCryptos } = require("../handlers/cryptoHandlers");

const cryptoRouter = Router();

cryptoRouter.get("/allCryptos", handlerGetAllCryptos);

module.exports = cryptoRouter;
