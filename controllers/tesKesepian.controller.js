const teskesepian = require('../models/tesKesepian');

module.exports = {
	getAllTesKesepian: async (req, res) => {
		try {
			const TesKesepian = await teskesepian.find();
			data = TesKesepian;

			res.json({
				message: 'success get all test kesepian',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},

	getTesKesepianByID: async (req, res) => {
		try {
			const { id } = req.params;
			const TesKesepian = await teskesepian.findById(id);
			const data = TesKesepian;

			res.status(200).json({
				message: 'success get test by id',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},

    addTesKesepian: (req, res) => {
		try {
			const data = req.body;
			const TesKesepian = new teskesepian(data);
			TesKesepian.save();

			res.json({
				message: 'Success create test',
			});
		} catch (error) {
			console.log(error);
		}
	},

    deleteTesKesepianByID: async (req, res) => {
		try {
			const { id } = req.params;
			const TesKesepian = await teskesepian.findById(id);
			const data = TesKesepian;

			if (!TesKesepian) {
				res.status(404).json({
					message: 'test data not Found',
				});
			} else {
				TesKesepian.deleteOne();
				res.json({ message: 'Test Data Deleted!' });
			}
		} catch (error) {
			console.log(error);
		}
	},

	updateTesKesepianByID: async (req, res) => {
		try {
			const { id } = req.params;
			const TesKesepian = await teskesepian.findById(id);
			const data = TesKesepian;

			Object.assign(TesKesepian, req.body);
			TesKesepian.save();
			res.status(201).send({
				message: 'success update test',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},
};