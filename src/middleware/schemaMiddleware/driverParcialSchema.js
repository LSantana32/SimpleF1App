const joi = require('joi')

const schemaParcialDriver = joi.object({
    name:joi.string().min(2).max(40),
    team:joi.string().min(4).max(20),
    number:joi.number().positive().max(99)
}).or('name','driver','number') //this is a ParcialDriver so, all the keys are not required. With .or we ensure that one of the keys is present and drop a error if not 

module.exports=schemaParcialDriver