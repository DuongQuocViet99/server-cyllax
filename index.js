const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer( app )

require('./configs')( app, express )
require('./routers')( app )
require('./src/todolist/socket')( server )

const port = process.env.NODE_ENV === 'production' ? process.env.PORT_PROD : 3001 

// setInterval(() => {
//   http.get('')
// }, 300000 )

server.listen( port, () => {
  console.log(`Example app listening at http://localhost:${ port }`)
})