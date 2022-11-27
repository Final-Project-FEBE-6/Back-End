const express = require('express');
const router = express.Router();

const {
	getAllArtikel,
	getArtikelByID,
	addArtikel,
	deleteArtikelByID,
	updateArtikelByID,
} = require('../controller/artikel.controller');

router.get('/', getAllArtikel);
router.get('/:id', getArtikelByID);
router.post('/', addArtikel);
router.delete('/:id', deleteArtikelByID);
router.put('/:id', updateArtikelByID);

module.exports = router;
