const tesstress = require('../models/tesStress');

module.exports = {
	getAllTesStress: async (req, res) => {
		try {
			const TesStress = await tesstress.find();
			data = TesStress;

			res.json({
				message: 'success get all test stress',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},

	getTesStressByID: async (req, res) => {
		try {
			const { id } = req.params;
			const TesStress = await tesstress.findById(id);
			const data = TesStress;

			res.status(200).json({
				message: 'success get test by id',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},

    addTesStress: (req, res) => {
		try {
			const data = req.body;
			const TesStress = new tesstress(data);
			TesStress.save();

			res.json({
				message: 'Success create test',
			});
		} catch (error) {
			console.log(error);
		}
	},

    deleteTesStressByID: async (req, res) => {
		try {
			const { id } = req.params;
			const TesStress = await tesstress.findById(id);
			const data = TesStress;

			if (!TesStress) {
				res.status(404).json({
					message: 'test data not Found',
				});
			} else {
				TesStress.deleteOne();
				res.json({ message: 'Test Data Deleted!' });
			}
		} catch (error) {
			console.log(error);
		}
	},

	updateTesStressByID: async (req, res) => {
		try {
			const { id } = req.params;
			const TesStress = await tesstress.findById(id);
			const data = TesStress;

			Object.assign(TesStress, req.body);
			TesStress.save();
			res.status(201).send({
				message: 'success update test',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},
};