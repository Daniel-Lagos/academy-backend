const { response } = require('express');

const createUser = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'Create user'
  });
};

const getUsers = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'get user'
  });
};

const updateUser = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'Update user'
  });
};

const removeUser = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'Remove user'
  });
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  removeUser
};
