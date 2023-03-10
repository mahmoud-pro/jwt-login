require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const errorsHandler = require('./middleware/errorsHandler');
const notFound = require('./middleware/notFound');
const loginRouter = require('./routes/login');

// middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use('/api/v1', loginRouter);

app.use(errorsHandler);
app.use(notFound);

const PORT = 5000 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
