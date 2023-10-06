const Router = require('express');
const router = Router();
const db = require('../database.js');
const jwt = require('jsonwebtoken');
const {SECRETKEY}=require("../Configuration/config");

router.post('/login',async(req,res)=>{

    const {email,password}=req.body;       
    
    let query=`call ecl.login('${email}','${password}')`;
    console.log(query)
    db.query(query, (error, result) => {
        if (error) {
            console.log(error)
        }
        else
         {
            const usr=result[0][0]
            const token = jwt.sign({ user: usr },SECRETKEY);
            console.log(usr)            
            res.send([result,token])
        }
    })
});



module.exports = router;
