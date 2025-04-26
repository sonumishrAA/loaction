const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/forward', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    await fetch('https://webhook.site/32a52983-b3e7-4566-8654-8bea59c03dd1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ latitude, longitude })
    });
    res.status(200).send('Location forwarded successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error forwarding location.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
