const tesoverthinking = require('../models/tesOverthinking');

module.exports = {
	getAllTesOverthinking: async (req, res) => {
		try {
			const TesOverthinking = await tesoverthinking.find();
			data = TesOverthinking;

			res.json({
				message: 'success get all test overthinking',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},

	getTesOverthinkingByID: async (req, res) => {
		try {
			const { id } = req.params;
			const TesOverthinking = await tesoverthinking.findById(id);
			const data = TesOverthinking;

			res.status(200).json({
				message: 'success get test by id',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},

    addTesOverthinking: (req, res) => {
		try {
			const data = req.body;
			const TesOverthinking = new tesoverthinking(data);
			TesOverthinking.save();

			res.json({
				message: 'Success create test',
			});
		} catch (error) {
			console.log(error);
		}
	},

    deleteTesOverthinkingByID: async (req, res) => {
		try {
			const { id } = req.params;
			const TesOverthinking = await tesoverthinking.findById(id);
			const data = TesOverthinking;

			if (!TesOverthinking) {
				res.status(404).json({
					message: 'test data not Found',
				});
			} else {
				TesOverthinking.deleteOne();
				res.json({ message: 'Test Data Deleted!' });
			}
		} catch (error) {
			console.log(error);
		}
	},

	updateTesOverthinkingByID: async (req, res) => {
		try {
			const { id } = req.params;
			const TesOverthinking = await tesoverthinking.findById(id);
			const data = TesOverthinking;

			Object.assign(TesOverthinking, req.body);
			TesOverthinking.save();
			res.status(201).send({
				message: 'success update test',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},
};