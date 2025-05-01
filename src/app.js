const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 3000    //listen in port designated by a envoirment variable system or by me
const db = require('./db/models')
const router = require('./routes/driverRoutes') 

app.use(express.json())        //convert a json response into an object
app.use('/drivers',router)    // go to routes and start the way (app.js->routes->middleware->controller)

app.listen(PORT, ()=>{
    console.log(`Listening in port ${PORT}`)
    db.sequelize.sync()        //synchronize the database
})