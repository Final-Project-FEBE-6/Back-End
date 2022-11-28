const dataUser = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
require('dotenv').config();

module.exports = {
	getAllUser: async (req, res) => {
		try {
			const user = await dataUser.find();
			data = user;

			res.json({
				message: 'success get All users data',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},

	getUserById: async (req, res) => {
		try {
			const { id } = req.params;
			const user = await dataUser.findById(id);
			const data = user;

			console.log(id);

			res.status(200).json({
				message: 'success get data users by id',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},

	deleteUserById: async (req, res) => {
		try {
			const { id } = req.params;
			const user = await dataUser.findById(id);
			const data = user;

			if (!user) {
				res.status(404).json({
					message: 'users not Found',
				});
			} else {
				user.deleteOne();
				res.json({ message: 'Users Data Deleted!' });
			}
		} catch (error) {
			console.log(error);
		}
	},

	updateUserById: async (req, res) => {
		try {
			const { id } = req.params;
			const user = await dataUser.findById(id);
			const data = user;

			Object.assign(user, req.body);
			user.save();
			res.status(201).send({
				message: 'success update user data',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},

	login: async (req, res) => {
		try {
			const data = req.body;

			//if email not found
			const wrongEmail = await dataUser.findOne({ email: data.email });
			if (!wrongEmail)
				return res.status(400).json({
					message: 'Email not found',
				});

			const user = await dataUser.findOne({ email: data.email });
			const checkPwd = await bcrypt.compareSync(data.password, user.password);
			if (!checkPwd)
				return res.status(400).json({
					message: 'incorrect password',
				});

			const token = await jwt.sign(
				{ email: data.email },
				process.env.SECRET_KEY
			);
			res.header('auth-token', token).json({
				message: 'success login',
				token,
			});
		} catch (error) {
			console.log(error);
		}
	},

	register: async (req, res) => {
		try {
			// hash password
			const data = req.body;
			const hash = bcrypt.hashSync(data.password, saltRounds);
			data.password = hash;

			// email exist
			const emailExist = await dataUser.findOne({ email: data.email });
			if (emailExist)
				return res.status(400).json({
					message: 'Email already exist',
				});

			//register
			const user = new dataUser(data);
			user.save();

			res.json({
				message: 'register success',
			});
		} catch (error) {
			console.log(error);
		}
	},
};
