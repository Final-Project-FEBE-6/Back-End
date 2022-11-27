const express = require('express');
const app = express();
const db = require('./config/db');

const PORT = process.env.PORT || 3000;

const allRoutes = require('./routes');

db.then((result) => {
	console.log('database terkoneksi');
}).catch((err) => {
	``;
	console.log(err);
});

app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
	console.log('server running on port ' + PORT);
});
