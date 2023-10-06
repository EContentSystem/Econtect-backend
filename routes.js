const Router = require('express');
const jwthelper=require('./Jwt Implementation/jwthelper')
const firstroute = require('./routes/firstroute.js');
const authroute = require('./routes/auth.js');

module.exports = Router()
    .use('/api/firstroute',jwthelper,firstroute)
    .use('/api/auth',authroute)
    