
const Employees = require('../models/employees')

//get all employees /employees
const getEmployees = (req, res) => {
    //res.send('get all employees');
    Employees.find()
    .then((data)=> {
        //res.status(200).json({data});
        res.status(200).render('index', {employees: data});
    })
    .catch((err) => {
        console.log(err)
    })
}


//get a single employee /employees/:id (store in d req.params $ and a string)
//(_id is d) unique way to find an employee is findById 
const getEmployee = (req, res) => {
    //res.send('get employee');
    const {id} = req.params
    Employees.findById({_id: id})
    .then((data) => {
        //res.status(200).json({data})
        res.status(200).render('details',{Employee: data})
    })
    .catch((err) => console.log(err));
}


//create a new employee /employees (in storing new employee...we need req.body)
// name, role, age -req.body 
const createEmployees = (req, res) => {
    //res.send('create employees')
    const {name, role, age} = req.body;
    console.log(req.body);
    const employee = new Employees(req.body)
    employee
    .save()
    .then((data) => {
        //res.status(201).json({msg: 'Employeecreated', data});
        res.redirect('/employees')
    })
    .catch((err) => {
        console.log(err);

    })

};

//update a new employee /employees/:id- params,body
const updateEmployee = (req,res) =>{
    //res.send('update employee');
    const{id} = req.params;
    //req.body
    Employees.findByIdAndUpdate({_id: id}, req.body,{
        new:true,
        runValidators:true,
    })
    .then((data) =>{
        res.status(200).json({msg:'employee updated', data})
    })
    .catch((err) => console.log(err));
    
};

//delete a new employee /employees/:id
const deleteEmployee = (req,res) => {
    //res.send('delete employee');
    const{id } = req.params;
    Employees.findByIdAndDelete({_id: id})
        .then((data) => {
            res.status(200).json({redirect: '/employees'})
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports ={
   getEmployees,
   getEmployee,
   createEmployees,
   updateEmployee, 
   deleteEmployee,
}