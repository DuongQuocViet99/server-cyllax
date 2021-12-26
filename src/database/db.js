const mysql = require('mysql')

const connection = mysql.createConnection({
  host: process.env.NODE_ENV === 'production' ? MYSQL_HOST_PROD : 'localhost',
  user: process.env.NODE_ENV === 'production' ? MYSQL_USER_PROD : 'root',
  password: process.env.NODE_ENV === 'production' ? MYSQL_PASSWORD_PROD : '654321',
  database: process.env.NODE_ENV === 'production' ? MYSQL_DATABASE_PROD : 'cyllax'
}) 

connection.connect( err => {
  if ( err ) throw err
})

module.exports = connection