const request = require('request');

const consumer_key = "VcQm9A3qD3UtrrlRk1ylHXSgx"
const consumer_secret = "cghC3wWlsLYowO1lLchF1GUrhowW1f0rS7j9nvft0UKKG5pErI"
const credentials = `${consumer_key}:${consumer_secret}`;
const credentialsBase64Encoded = new Buffer(credentials).toString('base64');

request({
    url: 'https://api.twitter.com/oauth2/token',
    method:'POST',
    headers: {
      'Authorization': `Basic ${credentialsBase64Encoded}`,
      'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: 'grant_type=client_credentials'
}, function(err, resp, body) {
    console.log(body); // the bearer token ...
});
