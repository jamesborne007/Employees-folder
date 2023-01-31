const express = require('express');
const router = express.Router();
const {
    getEmployees,
    getEmployee,
    createEmployees,
    updateEmployee, 
    deleteEmployee
} = require('../controller/employeeController');


router.route('/employees').get(getEmployees).post(createEmployees);

router
.route('/employees/:id')
.get(getEmployee)
.patch(updateEmployee)
.delete(deleteEmployee);

module.exports = router