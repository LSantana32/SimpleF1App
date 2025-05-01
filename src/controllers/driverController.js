const { Driver } = require('../db/models')

const getDrivers = async (req,res) => {
    const drivers = await Driver.findAll({
        attributes : ['name','team', 'number']
    })
    res.status(200).json(drivers)
}

const getDriver = async (req,res) => {
    const id = req.params.id
    const driver = await Driver.findByPk(id)
    res.status(200).json(driver)
}

const addDriver = async (req,res) => {
    const {name,team,number} = req.body
    await Driver.create({name,team,number})
    res.status(201).send(`The driver ${name} was created successfully`)
}

const deleteDriver = async (req,res) => {
    const id = req.params.id
    const driver = await Driver.destroy({
        where : {
            id:id
        }
    })
    res.status(200).send(`The driver ${driver['name']} has been deleted succesfully`)
}

const updateDriver = async (req,res) => {
    const id = req.params.id
    const newData = req.body
    const driver = await Driver.update({
        newData, where : {
            id:id
        }
    })
}


module.exports = {
    getDriver,
    getDrivers,
    addDriver,
    deleteDriver,
    updateDriver
}