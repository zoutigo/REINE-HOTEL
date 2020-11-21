var express = require('express') ;
var router = express.Router()
const verifyToken = require ('../validators/verifyToken')
const {listRoomType, createRoomType, readRoomType, updateRoomType, deleteRoomType} =require ('../controllers/roomTypes')

// Get  list room types
router.get('/', listRoomType)

// create room type

router.post('/', verifyToken, createRoomType)

// Read room type

router.get('/:id', readRoomType)

// update room type

router.put('/:id', verifyToken, updateRoomType)

// delete room type
router.delete('/:id', verifyToken, deleteRoomType)


module.exports = router