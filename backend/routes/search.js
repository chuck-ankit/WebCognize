const express = require('express');
const axios = require('axios');
const logger = require('../config/logger'); // Import logger
const router = express.Router();

router.post('/', async (req, res) => {
  const { query } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        prompt: query,
        model: 'text-davinci-003',
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    res.json({ results: response.data.choices });
  } catch (error) {
    logger.error(`Error in /search route: ${error.message}`);
    res.status(500).json({ error: 'An error occurred while fetching results. Please try again.' });
  }
});

module.exports = router;
