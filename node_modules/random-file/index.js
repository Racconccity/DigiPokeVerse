'use strict';

var pickItem      = require('pick-item');
var pickProp      = require('pick-prop');
var randomWorld   = require('random-lorem');

var fileTypes = {
  raster: ['bmp', 'gif', 'gpl', 'ico', 'jpeg', 'psd', 'png', 'psp', 'raw', 'tiff'],
  vector: ['3dv', 'amf', 'awg', 'ai', 'cgm', 'cdr', 'cmx', 'dxf', 'e2d', 'egt', 'eps', 'fs', 'odg', 'svg', 'xar'],
  '3d': ['3dmf', '3dm', '3mf', '3ds', 'an8', 'aoi', 'blend', 'cal3d', 'cob', 'ctm', 'iob', 'jas', 'max', 'mb', 'mdx', 'obj', 'x', 'x3d'],
  doc: ['doc', 'docx', 'dot', 'html', 'xml', 'odt', 'odm', 'ott', 'csv', 'rtf', 'tex', 'xhtml', 'xps']
};

function combine(filename, extension) {
  if (extension[0] !== '.') {
    extension = '.' + extension;
  }

  return filename + extension;
}

module.exports = function (options) {

  options = options || {};

  var filename = randomWorld(options);

  if (options.extension) {
    return combine(filename, options.extension);
  }

  if (options.extensions) {

    if (Array.isArray(options.extensions)) {
      return combine(filename, pickItem(options.extensions));
    }

    if (typeof options.extensions === 'object') {
      return combine(filename, pickItem(pickProp(options.extensions)));
    }

    throw new TypeError('options.extensions must be an Array or Object');
  }

  if (options.fileType) {

    var types = fileTypes[options.fileType];

    if (types) {
      return combine(filename, pickItem(types));
    }

    throw new TypeError("options.fileType should to be 'raster', 'vector', '3d' or 'doc' ");
  }

  return combine(filename, pickItem(pickProp(fileTypes)));
};
