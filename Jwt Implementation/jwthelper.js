const jwt = require('jsonwebtoken');
const {SECRETKEY}=require("../Configuration/config");

const tockenInspector = function (req, res, next) {
    const authHeader = req.header('Authorization');    
    const token = authHeader && authHeader.split(' ')[1];    

    if (token == null) {
        console.log("Token not found");
        return res.sendStatus(401);
    }    

    jwt.verify(token,SECRETKEY, (err, payload) => {
        if (err){            
            console.log("Un-authorized user");
            return res.sendStatus(401);
        } 
        req.payload = payload;
        next();
    });    
};

module.exports = tockenInspector;
