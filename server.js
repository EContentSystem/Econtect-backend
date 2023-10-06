require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');


const routes = require('./routes.js');



const app = express();
const PORT = process.env.SERVER_PORT||2004;



//middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


//serve static files
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.use(routes);


//serve index to every url
app.use('/*', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);    
});