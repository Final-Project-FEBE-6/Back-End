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

router.get('/', getAllUser);
router.get('/:id/', getUserById);
router.delete('/:id/', deleteUserById);
router.put('/:id/', updateUserById);
router.post('/login', login);
router.post('/register', register);

module.exports = router;
