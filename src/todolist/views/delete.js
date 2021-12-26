const connection = require('../../database/db') 

module.exports = ( req, res ) => {
  const { todo_id } = req.body
    
  connection.query(
    `DELETE FROM cyllax.todolist 
    WHERE todo_id = ${ todo_id }`, 
    err => {
      if ( err ) throw err
    }
  )

  res.end()
}