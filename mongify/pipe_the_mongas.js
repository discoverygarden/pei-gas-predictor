var fs = require('fs');
var filepath = './gas.js';
var mongas = require('./mongas.js');


fs.readFile(filepath, 'utf8', function(err, data) {
    if(err) {
        console.error("Could not open file: %s", err);
    }
    mongas.create_reality(JSON.parse(data));
});

