const express = require('express');
const router = express.Router();

const {
	addPsikolog,
	getAllPsikolog,
	getPsikologById,
	deletePsikologById,
	updatePsikologById,
} = require('../controller/psikolog.controller');

router.get('/', addPsikolog);
router.get('/', getAllPsikolog);
router.post('/:id', getPsikologById);
router.delete('/:id', deletePsikologById);
router.put('/:id', updatePsikologById);

module.exports = router;
