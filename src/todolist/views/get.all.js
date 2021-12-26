const connection = require('../../database/db') 

module.exports = ( req, res ) => {
  const { id } = req.params
  
  connection.query(
    `SELECT * FROM cyllax.todolist 
    WHERE id = '${ id }'`, 
    ( err, rs ) => {
      if ( err ) throw err
      res.json( rs )
    }
  )
}