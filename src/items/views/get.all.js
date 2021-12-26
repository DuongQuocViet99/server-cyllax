const connection = require('../../database/db') 

module.exports = ( req, res ) => {
  connection.query('SELECT * FROM cyllax.items', ( err, rs ) => {
    if ( err ) throw err
    res.json( rs )
  })
}