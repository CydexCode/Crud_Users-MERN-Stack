const express = require('express');
const {AddUser, FindAllUsers, FindSingUser, UpdateUser, DeleteUser} =require('../controllers/users.controller');
const router = express.Router()


// add user
router.post('/users',AddUser)

// find all users
router.get('/users',FindAllUsers)

// add user
router.get('/users/:id',FindSingUser)

// add user
router.put('/users/:id',UpdateUser)

// add user
router.delete('/users/:id',DeleteUser)





module.exports = router;