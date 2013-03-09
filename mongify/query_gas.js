var http = require("http");
var url = require("url");

var MongoClient = require('mongodb').MongoClient;

function start() {
        function onRequest(request, response) {
            var pathname = url.parse(request.url).pathname;
            console.log("Request for " + pathname + " received.");
            query_mongo('reality', '127.3', response);
        }
        http.createServer(onRequest).listen(8123);
        console.log("Server has started.");
}


function query_mongo(mongo_collection, value, response) {
    MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
        var collection = db.collection(mongo_collection);
        collection.find().toArray(
            function(err, docs) {
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end(JSON.stringify(docs));
            });
        })
}
start();
