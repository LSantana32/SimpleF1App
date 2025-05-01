const driverSchema = require('../schemaMiddleware/driverSchema')
const driverParcialSchema = require('../schemaMiddleware/driverParcialSchema')

const validateDriver = (req,res,next) => {
    const { error } = driverSchema.validate(req.body)  // validate look if driverSchema drop any error
    if(error){            // if driverSchema drop any error, enter inside if
        return res.status(404).json({
            message: "Invalid Dates",
            error : error.details[0].message   //details[0] shows the first error of the array. If a want to show all the errors, i have put error.details.map(err=>err.message)
        })
    }
    next() //if driverSchema didnt drop any error, pass to the next function of driverRoutes (in this case, the controller functions)
}

const validateParcialDriver = (req,res,next) => {
    const { error } = driverParcialSchema.validate(req.body)
    if(error){
        return res.status(404).json({
            message: "Invalid Dates",
            error : error.details[0].message
        })
    }
    next()
}


module.exports = {validateDriver,validateParcialDriver}