const axios = require('axios');

const JUDGE0_URL = process.env.JUDGE0_URL || 'https://judge0-ce.p.rapidapi.com';
const JUDGE0_KEY = process.env.JUDGE0_KEY || '';

async function submitCode(source_code, language_id, stdin = '') {
  const options = {
    method: 'POST',
    url: `${JUDGE0_URL}/submissions?base64_encoded=false&wait=true`,
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': JUDGE0_KEY,
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    },
    data: {
      source_code,
      language_id,
      stdin,
    },
  };
  const response = await axios.request(options);
  return response.data;
}

module.exports = { submitCode };
