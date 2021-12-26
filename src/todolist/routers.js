const express = require('express')
const router = express.Router()

const addTodo = require('./views/post.add')
const getAllTodo = require('./views/get.all')
const deleteTodo = require('./views/delete')
const isComplete = require('./views/put.complete')

router.get('/:id', getAllTodo)
router.post('/add', addTodo)
router.put('/complete', isComplete)
router.delete('/delete', deleteTodo)

module.exports = router