var query = require('../mongify/query_gas.js');

exports.list = function(req, res) {
    query.query_mongo('reality', '127.3', res);
};