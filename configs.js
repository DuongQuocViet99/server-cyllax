const cors = require('cors')
require('dotenv').config()

module.exports = ( app, express ) => {
  app.use( cors() )
  app.use( express.urlencoded({ extended: true }) )
  app.use( express.json() ) // To parse the incoming requests with JSON payloads
}