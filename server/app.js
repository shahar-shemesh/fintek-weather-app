require('dotenv').config();

const express = require('express');
const cors = require('cors');

const weatherRoutes = require('./routes/weather');
const citiesRoutes = require('./routes/citiesAutocomplete');

const app = express();
app.use(cors());

// enable corse for all origins
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Expose-Headers", "x-total-count");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

    next();
});

app.use(express.json());
app.set('trust proxy', true);

/* --------------------- Define Routes --------------------- */
app.use('/weather', weatherRoutes);
app.use('/cities', citiesRoutes);
/* ------------------------------------------------------- */


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));