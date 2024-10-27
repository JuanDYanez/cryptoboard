const { Router } = require("express");
const cryptoRouter = require('./crypto')

const router = Router();

router.use("/", cryptoRouter)

module.exports = router;
