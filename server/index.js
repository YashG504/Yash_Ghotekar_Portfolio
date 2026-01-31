const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Portfolio Server is Running');
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Form Received:", { name, email, message });
  // Here sends email...
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
