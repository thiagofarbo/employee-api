const express = require('express');
const routes = express.Router();

const EmployeeController = require('./controller/EmployeeController.js');

routes.get('/employees', EmployeeController.list);
routes.get('/employees/:id', EmployeeController.detail);
routes.post('/employees', EmployeeController.save);
routes.put('/employees/:id', EmployeeController.update);
routes.delete('/employees/:id', EmployeeController.delete);

module.exports = routes;
