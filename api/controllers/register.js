const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


exports.register = (request, response) => {
    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        const dbo = db.db("mydatabase");
        await dbo.collection("users").insertOne(request.body, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted " + res.insertedId);
            db.close();           
        });

        response.status(201).json({
            body: request.body
        })       
    });
}

exports.show = (request, response) => {
    response.status(200).json({
        body: {
            name: 'Rossano',
            email: 'rossanorb@gmail.com',
        }
    })
}

