var express = require('express') ;
var router = express.Router()
const {listServices, readService, createService, updateService, deleteService} = require ('../controllers/services')

// Get service list
router.get('/', listServices)

// create service

router.post('/', createService)

// Read service

router.get('/:id', readService)

// update service

router.put('/:id', updateService)

// delete service
router.delete('/:id', deleteService)


module.exports = router