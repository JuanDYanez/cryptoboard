const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const path = require('path');

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use('/api', express.static(path.join(__dirname, '../api')))

server.use(router);

module.exports = server;
