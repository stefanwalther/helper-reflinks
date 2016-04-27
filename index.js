/*!
 * helper-reflinks <https://github.com/helpers/helper-reflinks>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var utils = require('./utils');

module.exports = function(config) {
  return function(names, options, cb) {
    if (typeof names === 'function') {
      cb = names;
      options = {};
      names = null;
    }

    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    var app = this || {};
    var opts = utils.extend({}, config, options, app.options);
    var ctx = utils.extend({}, app.context);

    names = utils.arrayify(names);
    names = utils.union([], names, opts.names, ctx.names);

    if (names.length === 0) {
      cb(null, '');
      return;
    }

    utils.reflinks(names, opts, function(err, links) {
      if (err) return cb(err);
      cb(null, links.join('\n'));
    });
  };
};
