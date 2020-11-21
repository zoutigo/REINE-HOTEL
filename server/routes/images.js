var express = require('express') ;
var router = express.Router()
const verifyToken = require ('../validators/verifyToken')
const {listImages, createImage, readImage, updateImage, deleteImage, listImagesByPages, listImagesModules} =require ('../controllers/images')


// Get image list by module
router.get('/views/:module/:section/:category/:genre', listImagesModules)


// Get image list
router.get('/', listImages)

// create image

router.post('/', verifyToken, createImage)

// Read image

router.get('/:id', readImage)

// update image

router.put('/:id', verifyToken, updateImage)

// delete image
router.delete('/:id', verifyToken, deleteImage)


module.exports = router