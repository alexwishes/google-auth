'use strict';

const UUID = require('uuid');
const t2 = require('thirty-two');

var uuid = {};

uuid.generateUUID = function(){
    return UUID.v4().replace(new RegExp("-","g"),"").toUpperCase();
};

uuid.base32 = function(key){
    return t2.encode(key).toString().replace(new RegExp("=","g"),"");
}

module.exports.uuid = uuid;
