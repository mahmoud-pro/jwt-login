const customAPIErrors = require('../errors/custom-errors');

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new customAPIErrors('Please provide username and password');
  }
  res.send("data");
};

const dashboard = async (req, res) => {
  const lukeyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: 'Hello Mahmoud Taha',
    secret: `your number is ${lukeyNumber}`,
  });
};

module.exports = { login, dashboard };
