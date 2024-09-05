const citiesAutocompleteModel = require('../models/citiesAutocomplete');

exports.getCitySuggestions = async (req, res) => {

    const { query } = req.query;

    try {
        const citySuggestions = await citiesAutocompleteModel.getCitySuggestions(query);
        res.status(200).json(citySuggestions);
    }

    catch (error) {
        res.status(500).json({ error: error.message });
    }
};