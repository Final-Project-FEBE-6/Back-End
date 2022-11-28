const express = require("express");
const router = express.Router();

const {
  getAllTesKesepian,
  getTesKesepianByID,
  addTesKesepian,
  deleteTesKesepianByID,
  updateTesKesepianByID,
} = require("../controllers/tesKesepian.controller");

const { auth, adminAuth } = require('../middleware/auth');
const middleware = [auth, adminAuth];

router.get("/", auth, getAllTesKesepian);
router.get("/:id", middleware, getTesKesepianByID);
router.post("/", middleware, addTesKesepian);
router.delete("/:id", middleware, deleteTesKesepianByID);
router.put("/:id", middleware, updateTesKesepianByID);

module.exports = router;