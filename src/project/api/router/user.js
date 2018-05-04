const db = require('../db/dbhelper.js');
const apiResult = require('../utils/apiResult.js');
const jwt = require('jsonwebtoken')

module.exports = {
    register(app){
        app.post('/login',async (req, res) => {
            console.log(req)
            let username = req.body.username;
            let password = req.body.password;
            let result = await db.select('users', {username,password});
            if(result.status){
                let token = jwt.sign({username},'123456', {
                'expiresIn': 60*60*10 //置过期时间, 24 小时
                })
                let ar=apiResult(result.status,token,username);
                res.send(ar);
            }else {
                res.send(result)
            }
        })
        app.post('/register', async (req, res) => {
            let username = req.body.username;
            let password = req.body.password;           
            let telephone = req.body.telephone;
            let gender = req.body.gender;
            
            console.log(gender);
            let result = await db.insert('users', {username, password, telephone, gender});
            res.send(result)
        })
    }
}