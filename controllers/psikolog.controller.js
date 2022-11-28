const Psikolog = require("../models/psikolog");
const User = require("../models/psikolog")

module.exports = {
  getAllPsikolog: async (req, res) => {
    try {
    const psikolog = await Psikolog.find() // {} __v dan password nya jadi ilang kalau pake -__v -password

    res.json({
      message: "success get data psikolog",
      data: psikolog
      })
    } catch (error){
      console.log(error);
    }
  },

  getPsikologByID: async (req, res) => {
    try {
      const psikolog = await Psikolog.findById(req.params.id, "-__v")

      if(!psikolog){
        res.status(404).json({
          message : "Could not Found"
        });
    } else{
      res.status(200).json({
        message: "You Searched for",
        data: psikolog
      })
    }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  addPsikolog: (req, res) => {
      const data = req.body
      const psikolog = new Psikolog(data)

      // ini buat test aja = console.log(user)
      psikolog.save()

      res.json({
        message: "data psikolog has been created !!",
      })
  },

  deletePsikologByID: async (req, res) => {
    try {
      const psikolog = await Psikolog.findById(req.params.id)

      if(!psikolog){
        res.status(404).json({
          message : "Could not Found"
        });
    } else{
      psikolog.deleteOne()
      res.json({message: "Data Deleted!"})
    }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  deleteAllPsikolog: async (req, res) => {
    try {
      const psikolog = await Psikolog.deleteMany();
      res.status(200).json({
        message: "All Data Deleted!",
      });
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  updatePsikologByID: async (req, res) => {
    try {
      const psikolog = await Psikolog.findById(req.params.id, "-__v")

      Object.assign(psikolog, req.body)
      psikolog.save();
      res.status(201).send({ 
        message : "Data Psikolog Updated",
        data : psikolog })
   
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  }
}