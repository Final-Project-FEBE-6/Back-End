const express = require("express");
const router = express.Router();

const {
  getAllPsikolog,
  getPsikologByID,
  addPsikolog,
  deletePsikologByID,
  updatePsikologByID,
  deleteAllPsikolog,
} = require("../controllers/psikolog.controller");

const { auth, adminAuth } = require('../middleware/auth');
const middleware = [auth, adminAuth];

router.get("/", auth, getAllPsikolog);
router.get("/:id", middleware, getPsikologByID);
router.post("/", middleware, addPsikolog);
router.delete("/:id", middleware, deletePsikologByID);
router.delete("/", middleware, deleteAllPsikolog);
router.put("/:id", middleware, updatePsikologByID);

module.exports = router;
