const db = require('../db/dbhelper.js');
const apiResult = require('../utils/apiResult.js');
const jwt = require('jsonwebtoken');
module.exports = {
    manage(app){
        app.post('/productsadd', async (req,res)=>{
            let pronameE = req.body.pronameE;
            let pronameC = req.body.pronameC;
            let price = req.body.price;
            let url = req.body.url;
            let describe = req.body.describe;
            let classify = req.body.classify;
            let result = await db.insert('lc_products', pronameE, pronameC, price, url, describe, classify);
            res.send(result);   
        }),
        app.post('/productsupdate', async (req, res) => {
            let data1 = req.body.data1;
            let data2 = req.body.data2;
            let result = await db.insert('lc_products', data1, data2 )
            res.send(result)
        }),
        app.post('/productsdelete', async (req, res) => {
            let proid = req.body.proid;
            let result = await db.remove('lc_products', proid );
            // console.log(proid)
            res.send(result);
        }),
        app.get('/showproducts', async (req, res) => {    
                let result = await db.select('lc_products');
                res.send(result);
        })
    }
}