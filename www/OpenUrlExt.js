//
//  Paolo Messina
//
//  Created by Paolo Messina on 06/07/15.
//  Stripped to only cover iOS by Asko Soukka on 04/02/19.
//

var argscheck = require('cordova/argscheck'),
    exec      = require('cordova/exec');

function OpenUrlExt () {};

OpenUrlExt.prototype = {
  open: function (url, success, failure, params) {
    exec(success, failure, 'OpenUrlExt', 'open', [url]);
  }
};

module.exports = new OpenUrlExt();
