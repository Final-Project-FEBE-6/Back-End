const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://febe6:febe6123@cluster0.qvutbga.mongodb.net/sapasikolog';

const db = mongoose.connect(DB_URL);

module.exports = db;
