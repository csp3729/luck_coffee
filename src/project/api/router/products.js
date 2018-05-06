const db = require('../db/dbhelper.js');
const apiResult = require('../utils/apiResult.js');
const jwt = require('jsonwebtoken');
module.exports = {
    manage(app){
        app.post('/productsadd', async (req,res)=>{
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
            res.send(result);
        }),
        app.get('/showproducts', async (req, res) => {    
                let result = await db.select('lc_products');
                res.send(result);
        }),
        app.post('/shoppingcaradd', async (req,res)=>{
            let goodsId = req.body._id;
            let pronameC = req.body.pronameC;
            let price = req.body.price;
            let specification = req.body.specification;
            let temperature = req.body.temperature;
            let sugar = req.body.sugar;
            let milk = req.body.milk;
            let qty = req.body.qty*1;
            let query = {goodsId,pronameC,price,specification,temperature,sugar,milk}
            let result = await db.update('shoppingcar', query,{$inc:{qty}},{upsert:true});
            res.send(result)
        }),
        app.get('/showshopping', async (req, res) => {    
            let result = await db.select('shoppingcar');
            res.send(result);
        })
    }
}