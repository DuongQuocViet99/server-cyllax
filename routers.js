const itemsRouter = require('./src/items/routers')
const todolistRouter = require('./src/todolist/routers')

module.exports = app => {
  app.use('/items', itemsRouter)
  app.use('/todolist', todolistRouter)
}