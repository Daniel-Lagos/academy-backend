const { response } = require('express');
const fs = require('fs');

const updateResource = async (req, res = response) => {
  try {
    const files = req.files || [];

    files.map((file) => {
      fs.renameSync(file.path, file.originalname);
    });

    return res.status(200).json({
      success: true,
      message: 'upload Resource'
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: true,
      message: 'upload Resource'
    });
  }
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
