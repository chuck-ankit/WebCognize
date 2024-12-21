const express = require('express');
const axios = require('axios');
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
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
