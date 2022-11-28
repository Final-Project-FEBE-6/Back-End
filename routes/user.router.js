const express = require('express');
const router = express.Router();

const {
	getAllUser,
	getUserById,
	deleteUserById,
	updateUserById,
	login,
	register,
} = require('../controller/user.controller');

const { auth, adminAuth } = require('../middleware/auth');
const middleware = [auth, adminAuth];

router.get('/', middleware, getAllUser);
router.get('/:id/', middleware, getUserById);
router.delete('/:id/', auth, deleteUserById);
router.put('/:id/', auth, updateUserById);
router.post('/login', login);
router.post('/register', register);

module.exports = router;
