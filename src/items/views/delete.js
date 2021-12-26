const connection = require('../../database/db') 

module.exports = ( req, res ) => {    
  const { listItemId } = req.body

  connection.query(
    `DELETE FROM cyllax.items 
    WHERE id IN (${ listItemId.map( i => "'" + i + "'" ).toString() })`, 
    err => {
      if ( err ) throw err
    }
  )
  
  res.end()
}