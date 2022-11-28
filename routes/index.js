const express = require('express');
const router = express.Router();

const artikelRouter = require('./artikel.router');
const psikologRouter = require('./psikolog.router');
const userRouter = require('./user.router');
const teskesepianRouter = require('./tesKesepian.router')
const tesoverthinkingRouter = require('./tesOverthinking.router')
const tesstressRouter = require('./tesStress.router')

router.use("/teskesepian", teskesepianRouter)
router.use("/tesoverthinking", tesoverthinkingRouter)
router.use("/tesstress", tesstressRouter)
router.use('/artikel', artikelRouter);
router.use('/psikolog', psikologRouter);
router.use('/user', userRouter);


module.exports = router;
