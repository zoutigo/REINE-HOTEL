
var express = require('express');
var router = express.Router();
const verifyToken = require('../validators/verifyToken')
const {listUsers, createUser, readUser, updateUser, deleteUser, loginUser} = require ('../controllers/users');


/* GET users listing. */
router.get('/', verifyToken, listUsers)

// create user

router.post('/', createUser)

// Read user

router.get('/:id',verifyToken,  readUser)

// update user

router.put('/:id', verifyToken, updateUser)

// delete user
router.delete('/:id', verifyToken, deleteUser)

// login user 
router.post('/login', loginUser)




module.exports = router;
