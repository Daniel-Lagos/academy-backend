const { response } = require('express');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

const Resource = require('../models/Resource');

const updateResource = async (req, res = response) => {
  try {
    const files = req.files || [];
    const { userId } = req.body;

    files.map((file) => {
      fs.renameSync(file.path, file.originalname);
    });

    const {
      public_id,
      created_at,
      original_filename,
      resource_type,
      format,
      url
    } = await cloudinary.uploader.upload(
        files[0].originalname, { folder: userId })
      .catch((e) => {
        console.log(e);
        return res.status(500).json({
          success: false,
          message: 'Contact with admin'
        });
      });

    const resource = new Resource({
      url,
      format,
      owner: userId,
      publicId: public_id,
      createdAt: created_at,
      originalFilename: original_filename,
      resourceType: resource_type
    });

    await resource.save();

    files.map((file) => {
      fs.unlinkSync(file.originalname);
    });

    return res.status(500).json({
      success: true,
      resource
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
