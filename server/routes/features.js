var express = require('express') ;
var router = express.Router()
const {listFeature, createFeature, readFeature, updateFeature, deleteFeature} =require ('../controllers/features')

// Get features list
router.get('/', listFeature)

// create feature

router.post('/', createFeature)

// Read feature

router.get('/:id', readFeature)

// update feature

router.put('/:id', updateFeature)

// delete feature
router.delete('/:id', deleteFeature)


module.exports = router