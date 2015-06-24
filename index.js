var sailthru = require('sailthru-client')
  , API_KEY = process.env.npm_config_api_key
  , API_SECRET = process.env.npm_config_api_secret
  , client = sailthru.createSailthruClient(API_KEY, API_SECRET)
  , data = {
      content_html: '<html><body>{message}</body></html>'
    , test_vars: { message: process.env.npm_config_message }
    , send_email: process.env.npm_config_email
  }
;

client.apiPost('preview', data, function(err, response) {
  if (err)
    throw err;
  console.log(response);
})
