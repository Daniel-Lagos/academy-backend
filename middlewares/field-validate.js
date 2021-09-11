const { validationResult } = require('express-validator');


const fieldValidate = (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  next();
};


module.exports = {
  fieldValidate
};
