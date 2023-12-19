const express = require('express')
const morgan = require('morgan')    

const routeClientes = require('./src/routes/clienteRoutes')

const app = express()   

app.use(morgan('dev'))
app.use(express.json());

app.use(routeClientes)
    
app.listen(4500)
console.log('server on port 4500')
