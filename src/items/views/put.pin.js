const connection = require('../../database/db') 

module.exports = ( req, res ) => {
  const { pin, id } = req.body
  
  connection.query(
    `UPDATE cyllax.items 
    SET pin = ${ pin } 
    WHERE id = '${ id }'`, 
    ( err, rs ) => {
      if ( err ) throw err
    }
  )

  res.end()
}