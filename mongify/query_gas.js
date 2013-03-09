var MongoClient = require('mongodb').MongoClient;

exports.query_mongo = function(mongo_collection, value, response) {
    MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
        var collection = db.collection(mongo_collection);
        collection.find().toArray(
            function(err, docs) {
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end(JSON.stringify(docs));
            });
        })
}

