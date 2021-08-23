const { response } = require('express');

const User = require('../models/User');

const createUser = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'Create user'
  });
};

const getUsers = async (req, res = response) => {
  // const { limit = 5, from = 0 } = req.query;
  // const query = { status: true };

  const users = await User.countDocuments();

  res.status(400).json({
    success: true,
    users
  });
};

const updateUser = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, email, ...rest } = req.body;
  if (password) {
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, rest);

  res.status(200).json({
    success: true,
    user
  });

};

const removeUser = async (req, res = response) => {
  const { id } = req.params;
  const user = User.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    user
  });

};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  removeUser
};
