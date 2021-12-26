const express = require('express')
const router = express.Router()

const addItem = require('./views/post.add')
const deleteItem = require('./views/delete')
const getAllitem = require('./views/get.all')
const getOneitem = require('./views/get.one')
const changePin = require('./views/put.pin')
const changeLabel = require('./views/put.label')

router.get('/', getAllitem)
router.get('/:id', getOneitem)
router.post('/newitem', addItem)
router.put('/putchangelabel', changeLabel)
router.put('/changepin', changePin)
router.delete('/deleteitems', deleteItem)

module.exports = router