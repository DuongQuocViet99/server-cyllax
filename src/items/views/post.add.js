const shortid = require('shortid')
const connection = require('../../database/db') 

module.exports = ( req, res ) => {
  const id = shortid.generate()
  const { title, pin } = req.body 

  connection.query(
    `INSERT INTO cyllax.items ( id, title, label, pin ) 
    VALUE ('${ id }', '${ title }', '#343434', ${ pin })`, 
    err => {
      if ( err ) throw err
    }
  )
  connection.query(
    `SELECT * FROM cyllax.items WHERE id='${ id }'`, 
    ( err, rs ) => {
      if ( err ) throw err
      res.json( rs )
    }
  )
}