const connection = require('../../src/database/db') 

module.exports = server => {
  const io = require("socket.io")( server, { 
    cors: { origin: "*" } 
  })
  
  io.on('connection', socket => {  
    socket.on('addTodoItem', item => {  
      connection.query(
        `SELECT * FROM cyllax.todolist 
        WHERE todo_id = (
          SELECT max( todo_id ) 
          FROM cyllax.todolist 
          WHERE id = '${ item.id }'
        )`, 
        ( err, rs ) => {
          if ( err ) throw err
          io.emit('addTodoItem', rs )
        }
      )
    })
  })
}