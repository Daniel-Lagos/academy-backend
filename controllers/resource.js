const { response } = require('express');

const updateResource = async (req, res = response) => {
  return res.status(200).json({
    success: true,
    message: 'Upload Resource'
  });
};

const getResource = async (req, res = response) => {
  return res.status(200).json({
    success: true,
    message: 'get Resource'
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
  getResource,
  removeResource
};
