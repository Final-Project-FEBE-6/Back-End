const express = require('express')
const router = express.Router()

const userRouter = require('./user.router');
const artikelRouter = require('./artikel.router')
const teskesepianRouter = require('./tesKesepian.router')
const tesoverthinkingRouter = require('./tesOverthinking.router')
const tesstressRouter = require('./tesStress.router')

router.use("/artikel" , artikelRouter)
router.use("/teskesepian", teskesepianRouter)
router.use("/tesoverthinking", tesoverthinkingRouter)
router.use("/tesstress", tesstressRouter)
router.use('/user', userRouter);

module.exports = router;

