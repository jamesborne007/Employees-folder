
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs')
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const employeeRouter = require('./routes/employeeRouter')

//middleware
// USE TO pass json information
app.use(express.json());
//to get access / pass resquest body coming from the frontend
app.use(express.urlencoded({ extended: true }));

//routes
app.use(employeeRouter);
app.get('/create', (req,res) => {
    res.status(200).render('create');
})

//db connection
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`server running on ${PORT}..`);
    })
}).catch((err) => {
    console.log(err);
});

//Nosql - sql- Schema
