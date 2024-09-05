const express = require('express');
const citiesAutocompleteController = require('../controllers/citiesAutocomplete');

const router = express.Router();

// http://localhost:4000/cities => GET
router.get('/', citiesAutocompleteController.getCitySuggestions);

module.exports = router;
