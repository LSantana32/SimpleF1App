const joi = require('joi')

const schemaDriver = joi.object({           //define the driver schema as an object
    name:joi.string().min(2).max(40).required(),  //define the keys characteristic
    team:joi.string().min(4).max(20).required(),
    number:joi.number().positive().max(99).required()
})

module.exports = schemaDriver