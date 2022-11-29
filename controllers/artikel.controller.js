const artikel = require('../models/artikel');

module.exports = {
	getAllArtikel: async (req, res) => {
		try {
			const Artikel = await artikel.find();
			data = Artikel;

			res.json({
				message: 'success get all artikel',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},

	getArtikelByID: async (req, res) => {
		try {
			const { id } = req.params;
			const Artikel = await artikel.findById(id);
			const data = Artikel;

			res.status(200).json({
				message: 'success get artikel by id',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},

    addArtikel: (req, res) => {
		try {
			const data = req.body;
			const Artikel = new artikel(data);
			Artikel.save();

			res.json({
				message: 'Success create artikel',
			});
		} catch (error) {
			console.log(error);
		}
	},

    deleteArtikelByID: async (req, res) => {
		try {
			const { id } = req.params;
			const Artikel = await artikel.findById(id);
			const data = Artikel;

			if (!Artikel) {
				res.status(404).json({
					message: 'artikel data not Found',
				});
			} else {
				Artikel.deleteOne();
				res.json({ message: 'artikel Data Deleted!' });
			}
		} catch (error) {
			console.log(error);
		}
	},

	updateArtikelByID: async (req, res) => {
		try {
			const { id } = req.params;
			const Artikel = await artikel.findById(id);
			const data = Artikel;

			Object.assign(Artikel, req.body);
			Artikel.save();
			res.status(201).send({
				message: 'success update artikel',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},
};
