const connection = require('../../database/db') 

module.exports = ( req, res ) => {
  const { todo_id, is_complete } = req.body

  connection.query(
    `UPDATE cyllax.todolist 
    SET is_complete = ${ is_complete }
    WHERE todo_id = '${ todo_id }'`, 
    ( err, rs ) => { 
      if ( err ) throw err
    }
  )

  res.end()
}