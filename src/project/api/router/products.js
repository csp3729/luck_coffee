const db = require('../db/dbhelper.js');
const apiResult = require('../utils/apiResult.js');
const jwt = require('jsonwebtoken');
module.exports = {
    manage(app){
        app.post('/productsadd', async (req,res)=>{
            console.log(req)
            let data = {
                pronameC:req.body.pronameC,
                pronameE:req.body.pronameE,
                price:req.body.price,
                url:req.body.url,
                describe:req.body.describe,
                classify:req.body.classify,
            }
            // let pronameC = req.body.pronameC;
            // let pronameE = req.body.pronameE;
            // let price = req.body.price;
            // let url = req.body.url;
            // let describe = req.body.describe;
            // let classify = req.body.classify;
            // console.log(pronameC)
            let result = await db.insert('lc_products', data);
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
        }),
        app.post('/shoppingcaradd', async (req,res)=>{
            console.log(req)
            let goods = req.body
            let result = await db.insert('shoppingcar', {goods});
            res.send(result);   
        }),
        app.get('/showshopping', async (req, res) => {    
            let result = await db.select('shoppingcar');
            res.send(result);
        })
    }
}