const express = require('express');
const cors = require('cors');

const app = express()

const companyController = require('./controllers/company-controller')
const userController = require('./controllers/user-controller')

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.use('/companies', companyController)
app.use('/users', userController)

app.listen(3001, () => console.log('listening on port 3001'));