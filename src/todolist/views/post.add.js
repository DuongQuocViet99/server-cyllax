const connection = require('../../database/db') 

module.exports = ( req, res ) => {
  const { id, title } = req.body

  connection.query(
    `INSERT INTO cyllax.todolist (title, is_complete, id)
    VALUES ('${ title }', 0, '${ id }')`, 
    ( err, rs ) => {
      if ( err ) throw err
    }
  )

  res.end()
}