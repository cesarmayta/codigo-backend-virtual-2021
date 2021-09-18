const { MongoClient,ObjectId } = require("mongodb");
const { config } = require('../config');

const DB_NAME =  config.dbName;
const MONGO_URI = config.mongoUri;

class MongoLib{
    constructor(){
        this.client = new MongoClient(MONGO_URI,{useNewUrlParser: true});
        this.dbName = DB_NAME;
    }

    connect(){
        if(!MongoLib.connection){
            MongoLib.connection = new Promise((resolve,reject)=> {
                this.client.connect(err =>{
                    if (err){
                        reject(err);
                    }

                    console.log('estas conectado a mongodb');
                    resolve(this.client.db(this.dbName));
                });
            });
        }
        return MongoLib.connection;
    }

    getAll(collection,query){
        return this.connect().then(db =>{
            return db
            .collection(collection)
            .find(query)
            .toArray();
        });
    }

    create(collection,data){
        return this.connect()
        .then(db =>{
           return db.collection(collection).insertOne(data); 
        })
        .then(result => result.insertedId);
    }

    update(collection,id,data){
        return this.connect()
        .then(db =>{
            return db
            .collection(collection)
            .updateOne({_id: ObjectId(id)},{$set : data},{ upsert: false });
        })
        .then(result => result.upsertedId || id);
    }

    delete(collection,id){
        return this.connect()
        .then(db =>{
            return db.collection(collection).deleteOne({_id: ObjectId(id)});
        })
        .then(() => id);
    }

}

module.exports = MongoLib;

