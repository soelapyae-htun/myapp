//Import packages
const express = require('express')
const morgan = require('morgan')

//Configure out port
//Check if it is set in the invironment variable, if not then we default ot 3000
const port = process.env.PORT || 3000

//Create an instance of express application
const app =express()

//Log all request
app.use(morgan('common'))

//GET /
app.get('/',(req,resp)=>{
    //what is the media type
    resp.type('text/html')
    //set the status code
    resp.status(200)
    //send the response
    resp.send(`<h1>The current time is ${new Date()}`)
})
// Serve static resource
//app.use("/assets", express.static(__dirname + "/static"))
//Start our wev application
app.listen(port, () => {
    console.info(`Starting application on port ${port} at ${new Date()}`)
})
