normalize = function(values){
    var normalizeFnc = Npm.require('vectors/normalize')(values.length)
    return normalizeFnc(values);
};