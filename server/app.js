require('dotenv').config();

const express = require('express');
const cors = require('cors');

const weatherRoutes = require('./routes/weather');
const citiesRoutes = require('./routes/citiesAutocomplete');

const app = express();
app.use(cors());
app.use(express.json());
app.set('trust proxy', true);

/* --------------------- Define Routes --------------------- */
app.use('/weather', weatherRoutes);
app.use('/cities', citiesRoutes);
/* ------------------------------------------------------- */


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));