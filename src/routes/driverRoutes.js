const { Router } = require('express')
const router = Router()
//import own classes/functions
const driverController = require('../controllers/driverController')
const driverValidator = require('../middleware/validator/driverValidator')

router.get('/', driverController.getDrivers)
router.get('/:id', driverController.getDriver) //:id "save" id with command req.params.id
router.post('/', driverValidator.validateDriver, driverController.addDriver) // (path,valitation with middleware, action with controller)
router.delete('/:id', driverController.deleteDriver)
router.put('/:id', driverValidator.validateDriver, driverController.updateDriver)
router.patch('/:id', driverValidator.validateParcialDriver, driverController.updateDriver) //(the difference between validateDriver and validateParcialDriver is that validateDriver changes all key values (PUT) and validateParcialDriver changes key values but not all (PATCH))


module.exports=router