const express = require('express');
const axios = require('axios');
const fs = require('fs'); // Import the fs module
const router = express.Router();

router.post('/', async (req, res) => {
  const { query } = req.body;

  if (!query || typeof query !== 'string') {
    console.error('Invalid query parameter');
    return res.status(400).json({ error: 'Invalid query parameter' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: query },
        ],
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const resultContent = response.data.choices[0].message.content;
    const results = [{ text: resultContent }];

    // Save results to a JSON file
    fs.writeFileSync('./search_results.json', JSON.stringify(results, null, 2));

    // Send results as JSON response
    res.json({ results });

  } catch (error) {
    console.error('Error in /search route:', error.toJSON());
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error(`Data: ${JSON.stringify(error.response.data)}`);
    }
    res.status(500).json({
      error: 'An error occurred while processing your request. Please try again.',
    });
  }
});

module.exports = router;
