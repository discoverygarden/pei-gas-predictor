var query = require('../mongify/query_gas.js');

exports.list = function(req, res) {
    query.query_mongo('reality', 'IRAC', res);
};