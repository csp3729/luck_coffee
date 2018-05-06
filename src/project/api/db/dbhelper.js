const apiResult = require('../utils/apiResult.js');
const mongodb = require('mongodb');
const mc = mongodb.MongoClient;
var db = null;
mc.connect('mongodb://localhost:27017',(error,client)=>{
    db = client.db('gz1801');
})
module.exports = {
    async select(_collection, _condition = {}){
        let result = await db.collection(_collection).find(_condition).toArray();
        return apiResult(result.length>0, result)
    },
    // async select(_collection, _document = {}){
    //     try{
    //         let items = await db.collection(_collection).find(_document).toArray();
    //         let result = apiResult(true,items);
    //         return result;
    //     } catch(error){
    //         return apiResult(false,error);
    //     }        
    // },
    async remove(_collection, _proid){
        try {
            let result = await db.collection(_collection).remove({"_id":"_proid"});
            // console.log(_proid)
            
            return result;
        } catch(error){
            return apiResult(false, error);
        }
    },
    async update(_collection, _query,_update,_upsert,_multi){
        try {
            let result = await db.collection(_collection).update(_query,_update,_upsert,_multi);
            return result
        } catch(error){
            return apiResult(false, error);
        }
    },
    async insert(_collection, _data){
        try{
            let result = await db.collection(_collection).insert(_data);
            return apiResult(result.insertedCount > 0, result);
        }catch(error){
            return apiResult(false,error);
        }   
    }
}

