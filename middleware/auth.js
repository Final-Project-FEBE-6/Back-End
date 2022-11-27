const jwt = require('jsonwebtoken');
const { users } = require('../models/user');

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
		return res.status(400).json({
			message: 'invalid token',
		});
	}
};

const adminAuth = (res, req, next) => {
	if (req.role != 'admin') {
		return res.status(403).json({
			message: 'forbiden access',
		});
	}
	next();
};

module.exports = { auth, adminAuth };
