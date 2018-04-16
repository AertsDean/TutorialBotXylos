var zipFolder = require('zip-folder');
var path = require('path');
var fs = require('fs');
var request = require('request');

var rootFolder = path.resolve('.');
var zipPath = path.resolve(rootFolder, '../tutorialbotxylos.zip');
var kuduApi = 'https://tutorialbotxylos.scm.azurewebsites.net/api/zip/site/wwwroot';
var userName = '$tutorialbotxylos';
var password = 'sjFtnq4sa7h90CoTayGJf8jw2hfQvo6jNfYlC7viYjgy6NNf06FrsxGZ0f0v';

function uploadZip(callback) {
  fs.createReadStream(zipPath).pipe(request.put(kuduApi, {
    auth: {
      username: userName,
      password: password,
      sendImmediately: true
    },
    headers: {
      "Content-Type": "applicaton/zip"
    }
  }))
  .on('response', function(resp){
    if (resp.statusCode >= 200 && resp.statusCode < 300) {
      fs.unlink(zipPath);
      callback(null);
    } else if (resp.statusCode >= 400) {
      callback(resp);
    }
  })
  .on('error', function(err) {
    callback(err)
  });
}

function publish(callback) {
  zipFolder(rootFolder, zipPath, function(err) {
    if (!err) {
      uploadZip(callback);
    } else {
      callback(err);
    }
  })
}

publish(function(err) {
  if (!err) {
    console.log('tutorialbotxylos publish');
  } else {
    console.error('failed to publish tutorialbotxylos', err);
  }
});