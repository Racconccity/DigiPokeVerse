'use strict';

var isObject = require('is-object');
var pickKey  = require('pick-key');


module.exports = function (object) {

  if (!object || !isObject(object)) {
    return undefined;
  }

  var key = pickKey(object);

  return key ? object[key] : undefined;
};
