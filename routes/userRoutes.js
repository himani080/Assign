const express = require('express');
const { getUsers, createUser, updateUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);       // GET: Retrieve all users
router.post('/', createUser);    // POST: Create a new user
router.put('/:id', updateUser);  // PUT: Update user by ID

module.exports = router;
