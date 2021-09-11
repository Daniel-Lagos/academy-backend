const { response } = require('express');

const isRole = (...roles) => {
  return (req, res = response, next) => {

    if (roles.includes(req.user.role)) {
      return res.status(401).json({
        message: `The service requires a role ${roles}`
      });
    }

    next();
  };
};

module.exports = {
  isRole
};
