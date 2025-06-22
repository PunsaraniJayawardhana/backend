// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect Database
// connectDB();

// app.get('/', (req, res) => {
//   res.send('Backend is up and running');
// });

// // Routes
// app.use('/api/auth', require('./routes/auth'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('Backend is up and running');
});
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
