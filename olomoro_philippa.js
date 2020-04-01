var mongo = require("mongodb");

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017//Olomoro_Philippa";
MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    console.log("Database created by Olomoro Philippa");
    db.close();
})