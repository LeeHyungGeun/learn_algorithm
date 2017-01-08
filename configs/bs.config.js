var path = require('path');
var configs = require('./host.config.js');
module.exports = {
    server: path.resolve(__dirname, '../'),
    port: configs.bs.port,
    browser: ['Chrome']
};