const express = require('express');
const router = express.Router();

const artikelRouter = require('./artikel.router');
const psikologRouter = require('./psikolog.router');
const soalTestRouter = require('./soalTest.router');
const userRouter = require('./user.router');

router.use('/artikel', artikelRouter);
router.use('/psikolog', psikologRouter);
router.use('/soalTest', soalTestRouter);
router.use('/user', userRouter);

module.exports = router;
