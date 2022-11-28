const express = require("express");
const router = express.Router();

const {
  getAllArtikel,
  getArtikelByID,
  addArtikel,
  deleteArtikelByID,
  updateArtikelByID,
} = require("../controllers/artikel.controller");

const { auth, adminAuth } = require('../middleware/auth');
const middleware = [auth, adminAuth];

router.get("/", auth, getAllArtikel);
router.get("/:id", middleware, getArtikelByID);
router.post("/", middleware, addArtikel);
router.delete("/:id", middleware, deleteArtikelByID);
router.put("/:id", middleware, updateArtikelByID);

module.exports = router;