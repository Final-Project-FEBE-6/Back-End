require('dotenv').config();
const jwt = require('jsonwebtoken');
const user = require('../models/user');

const auth = (req, res, next) => {
	const authHeader = req.get('Authorization');
	let token = '';

	if (authHeader && authHeader.startsWith('Bearer'))
		token = authHeader.split(' ')[1];
	else
		return res.status(401).send({
			status: false,
			message: 'enter the token first',
			data: null,
		});

	try {
		const verified = jwt.verify(token, process.env.SECRET_KEY);
		req.user = verified;
		next();
	} catch (err) {
		res.status(400).send({
			message: 'invalid token',
		});
	}
};

const adminAuth = (req, res, next) => {
	if (req.user.role != 'admin') {
		return res.status(403).send({
			message: 'user cannot access',
			data: null,
		});
	}
	next();
};

module.exports = { auth, adminAuth };
