//creating a collection in a database

var MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    var dbo = db.db("internsdb")
    dbo.createCollection("interns", (err, res) => {
        if (err) throw err;
        console.log("interns collection created.")
        db.close();
    });
});