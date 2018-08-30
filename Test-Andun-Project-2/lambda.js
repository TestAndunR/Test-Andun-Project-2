let AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    console.log("2nd commit")
    callback(null,'Successfully executed');
}