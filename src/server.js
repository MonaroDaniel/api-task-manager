// Main Project - Server Initialization
const utils = require('../operations/v1/utils')
const cors = require('cors');

// Start database pool
let conn = require('../services/connectionpool');
conn.init();

//Enable .env from root
require('dotenv').config()

//API Port 
let port = 80

//Compression
let compression = require('compression')

//Express for Node.js
let express = require('express');
let app = express();
app.use(cors())

//JSON Body parser
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PUT, PATCH");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//Compression
app.use(compression())

//Routes
let routes = require('../http/routes');
let router = express.Router();
routes(router);

//Base Path
app.use('/taskmanager', router);

//Start Server
app.listen(port, function() {
    utils.fc_exibeTitulo()
    console.log('API Started on Port ' + port);
});