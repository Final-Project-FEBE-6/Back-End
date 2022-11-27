const express = require('express');
const router = express.Router();

const {
	addSoalTest,
	getAllSoalTest,
	getSoalTestById,
} = require('../controller/SoalTest.controller');

router.get('/', addSoalTest);
router.get('/', getAllSoalTest);
router.post('/:id', getSoalTestById);

module.exports = router;
