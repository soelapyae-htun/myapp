
//Import Package
const express = require('express')
const morgan = require('morgan')


//configure out port
//check if it is set in the enviroment variable , if not then we default to 3000
const port = process.env.port || 3000


console.info(`port = ${port}`) 

