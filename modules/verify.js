'use strict';
const notp = require("./otp");

var totp = {};

totp.verify = function(code,key){
    var flg = notp.totp.verify(code, key, {});
    var delta = -1;
    if(flg){
        delta = flg.delta;
    }

    if(delta==0){
        return true;
    }else{
        return false;
    }
};

module.exports.totp = totp;
