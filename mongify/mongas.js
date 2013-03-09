/**
 * Dumb library for loading our gas info into Mongo.
 */

var MongoClient = require('mongodb').MongoClient;

exports.create_collections = function() {
  MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    // Get a collection and create it if it doesn't exist.
    if(!err) {console.log("We are connected");}
    db.createCollection('reality', {w:1}, function(err, collection) {
      if(!err) {console.log("Reality is Virtual.");}
    });
    db.createCollection('predictions', {w:1}, function(err, collection) {
      if(!err) {console.log("The oracle is ready.");}
    });
  })
}


/**
 *These functions are stupid and will input anything, please conform to
 {
 date:timestamp
 price:canadian dollars}
 */
exports.create_reality = function(lots_of_reality) {

  MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    var collection = db.collection('reality');
    collection.insert(lots_of_reality, {w:1}, function(err, result) {
      if(!err) {console.log("Reality is in the box.");}
    });
  })
}

exports.create_prediction = function(prediction) {

  MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    var collection = db.collection('predictions');
    collection.insert(prediction, {w:1}, function(err, result) {
      if(!err) {console.log("Magic 8 ball has been shaken.");}
    });
  })
}
