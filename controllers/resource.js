const { response } = require('express');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

const updateResource = async (req, res = response) => {
  try {
    const files = req.files || [];

    files.map(async (file) => {
      fs.renameSync(file.path, file.originalname);
      const result = await cloudinary.uploader.upload(file.originalname);
      console.log(result);

    });

    return res.status(500).json({
      success: true,
      message: 'upload Resource'
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
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
