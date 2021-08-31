const { response } = require('express');

const updateResource = async (req, res = response) => {
  return res.status(200).json({
    success: true,
    message: 'upload Resource'
  });
};


const removeResource = async (req, res = response) => {
  return res.status(200).json({
    success: true,
    message: 'Remove Resource'
  });
};

module.exports = {
  updateResource,
  removeResource
};
