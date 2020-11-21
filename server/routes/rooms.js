var express = require('express') ;
var router = express.Router()
const {listRoom, createRoom, readRoom, updateRoom, deleteRoom} =require ('../controllers/rooms')

// Get room list
router.get('/', listRoom)

// create room

router.post('/', createRoom)

// Read room

router.get('/:id', readRoom)

// update room

router.put('/:id', updateRoom)

// delete room
router.delete('/:id', deleteRoom)


module.exports = router