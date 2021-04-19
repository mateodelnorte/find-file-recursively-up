const debug = require('debug')('loop:find-file-recursively-up');
const fs = require('fs');
const path = require('path');

let cwd = process.cwd();

module.exports = function (filename, cb) {
  function findIn(dotsAndSlashes) {
    const fullpath = path.join(cwd, dotsAndSlashes, filename);

    debug(`looking for ${filename} at ${fullpath}`);

    const exists = fs.existsSync(fullpath);

    if (exists) {
      return cb(null, fullpath);
    } else {
      if (path.resolve(cwd, dotsAndSlashes) === '/') return cb();

      return findIn(path.join('..', dotsAndSlashes));
    }
  }

  return findIn('.');
};
