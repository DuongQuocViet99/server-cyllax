const connection = require('../../database/db') 

module.exports = ( req, res ) => {    
  const { colorCode, listItemId } = req.body

  connection.query(
    `UPDATE cyllax.items 
    SET label = '${ colorCode }' 
    WHERE id IN (${ listItemId.map( i => "'" + i + "'" ).toString() })`, 
    err => {
      if ( err ) throw err
    }
  )
  
  res.end()
}