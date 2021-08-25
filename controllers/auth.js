const { response } = require('express');

const userLogin = async (req, res = response) => {
  res.status(200).json({
    success: true,
    message: 'Login success'
  });
};

module.exports = {
  userLogin
};
