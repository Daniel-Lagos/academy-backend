const bcrypt = require('bcryptjs');
const { response } = require('express');

const User = require('../models/User');

const userLogin = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'There is not person with that password/email'
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message: 'The password/email is incorrect'
      });
    }

    return res.status(200).json({
      success: true,
      name: user.name,
      uid: user.id,
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact an administrator'
    });
  }
};

module.exports = {
  userLogin
};
