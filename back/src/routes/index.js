const { Router } = require("express");
const cryptoRouter = require('./crypto')

const router = Router();

router.use("/index", cryptoRouter)

module.exports = router;
