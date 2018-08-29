var neurosky = require('node-neurosky');

var neuroskyClient = neurosky.createClient({
    appName: 'GestureService',
    appKey: '2428ce4308f452a0a0804569d1a67d520e727cf1'
  });
neuroskyClient.connect();

module.exports = neuroskyClient;