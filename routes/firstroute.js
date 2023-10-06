const Router = require('express');
const router = Router();
const db = require('../database.js');



router.get('/getdata', async (req, res) => {       
    let query=`call ecl.getRoles();`
    console.log(query)
    const result = await db.promise().query(query)
        .catch(err => {
            console.log(err);            
            res.status(200).send({msg:"Error Occured"});
        });
    if (result) {        
        res.status(200).send(JSON.stringify(result[0][0]));
    }
});

router.post('/getInfo', async (req, res) => {
    logger.info(`call getFmInfo('${req.body.usnm}', ${req.body.role ? 1 : -1}, ${req.body.d_id})`, { req });
    console.log(`call getFmInfo('${req.body.usnm}', ${req.body.role ? 1 : -1}, ${req.body.d_id})`);
    const result = await db.promise().query(`call getFmInfo('${req.body.usnm}', ${req.body.role ? 1 : -1}, ${req.body.d_id})`)
        .catch(err => {
            console.log(err);
            logger.error(err, { req });
            res.status(200).send(null);
        });

    if (result) {
        res.status(201).send(result[0][0][0]);
    }
});
module.exports = router;
