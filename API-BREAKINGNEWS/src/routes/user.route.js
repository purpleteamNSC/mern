const route = require('express').Route();
const userController = require('../controllers/user.controller')

route.get("/", userController.soma)

module.exports = route;