const { response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const createUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: 'This user is already exists'
      });
    }

    user = new User(req.body);

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.status(200).json({
      success: true,
      uid: user.id,
      name: user.name
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

const getUsers = async (req, res = response) => {
  // const { limit = 5, from = 0 } = req.query;
  // const query = { status: true };

  const users = await User.countDocuments();

  return res.status(400).json({
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

  return res.status(200).json({
    success: true,
    user
  });

};

const removeUser = async (req, res = response) => {
  const { id } = req.params;
  const { password, ...rest } = await User.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    rest
  });

};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  removeUser
};
