const express = require("express");
const router = express.Router();

const {
  getAllTesOverthinking,
  getTesOverthinkingByID,
  addTesOverthinking,
  deleteTesOverthinkingByID,
  updateTesOverthinkingByID,
} = require("../controllers/tesOverthinking.controller");

const { auth, adminAuth } = require('../middleware/auth');
const middleware = [auth, adminAuth];

router.get("/", auth, getAllTesOverthinking);
router.get("/:id", middleware, getTesOverthinkingByID);
router.post("/", middleware, addTesOverthinking);
router.delete("/:id", middleware, deleteTesOverthinkingByID);
router.put("/:id", middleware, updateTesOverthinkingByID);

module.exports = router;