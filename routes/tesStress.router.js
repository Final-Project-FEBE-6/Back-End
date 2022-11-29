const express = require("express");
const router = express.Router();

const {
  getAllTesStress,
  getTesStressByID,
  addTesStress,
  deleteTesStressByID,
  updateTesStressByID,
} = require("../controllers/tesStress.controller");

const { auth, adminAuth } = require('../middleware/auth');
const middleware = [auth, adminAuth];

router.get("/", auth, getAllTesStress);
router.get("/:id", auth, getTesStressByID);
router.post("/", middleware, addTesStress);
router.delete("/:id", middleware, deleteTesStressByID);
router.put("/:id", middleware, updateTesStressByID);

module.exports = router;
