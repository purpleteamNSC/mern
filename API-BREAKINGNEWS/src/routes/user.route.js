const route = require('express').route();
const userController = require('../controllers/user.controller')

route.get("/", userController.soma)

module.exports = route;