const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


exports.register = (request, response) => {
    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        const dbo = db.db("test");
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

exports.all = async (request, response) => {
    const perPage = parseInt(request.query.limit * 1) > 1 ? parseInt(request.query.limit * 1) : 10;
    let pageNumber = parseInt((request.query.page * 1) > 0 ? (request.query.page - 1) : 0);
    const sort = request.query.sort ? request.query.sort : '_id';
    const ascending = request.query.hasOwnProperty('desc') ? -1 : 1;

    const db = await MongoClient.connect(url);
    const dbo = db.db("test");
    const total = await dbo.collection('users').countDocuments()
    const pages = Math.ceil(total / perPage)

    const mongoSort = {};
    Object.assign(mongoSort, { [sort]: ascending });
    
    if (pageNumber >= pages) {
        pageNumber = (pages - 1)
    }

    const startFrom = (pageNumber) * perPage;

    const result = await dbo.collection('users')
        .find({})
        .sort(mongoSort)
        .skip(startFrom)
        .limit(perPage)
        .toArray();

    response.status(200).json({
        body: result,
        per_page: perPage,
        current_page: pageNumber + 1,
        last_page: pages,
        count: total
    })

}

