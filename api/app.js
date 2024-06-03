const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/product.route');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/products', productRoutes);

const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected to Atlas'))
    .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
