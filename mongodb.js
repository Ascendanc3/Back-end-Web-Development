const MongoClient = require("mongodb").MongoClient;
const connectionString = "mongodb://user_latihan:123456@localhost:27107?authSource+admin";

MongoClient.connect(connectionString, {useUnifiedTopology: true}, (error, client) => {
    if(error) return console.error(error);
    console.log("server database connect");

    const db = client.db('db_latihan');
    db.collection('users').find().toArray((err, result) => {
        if(err) throw err
        console.log(result);
    });
});