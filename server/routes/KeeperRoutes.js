const express = require('express')
const route = express.Router()

const {create, getAll, remove} = require('../controller/KeeperController')

route.post('/create', create)
route.get('/', getAll)
route.delete('/remove/:id', remove)

module.exports = route