'use strict';
var NOTIFY_TYPE = 'chrome';
var FIREBASE_LOCATION = require("./../secrets");

var Firebase = require('firebase'); 
var path = require('path');
var os = require('os');
var findApp = require('../util/findApp');
var spawn = require('../util/spawn');

var cmd = 'chrome_cmd_here';
var DEFAULT_IMAGE = path.resolve(__dirname + '../../../images/grunt-logo.png');

function supported(options) {

  //Just assuming it for now, set to config or something ...

  var app = true;
  //var app = findApp(cmd);

  // options.debug({
  //   growl: app || (IS_MAC || IS_WINDOWS ? cmd + ' wasn\'t found, blah ...'

  return !!app;
}

function notify (options, cb) {
  var content = {
    message: options.message,
    title: options.title,
    time: (new Date).toLocaleTimeString()
  };
  var myFire = new Firebase(FIREBASE_LOCATION);
  myFire.push(content, function(err){
    //check for network fail?
    cb();
  });
}

module.exports = {
  name: NOTIFY_TYPE,
  supported: supported,
  notify: notify
};