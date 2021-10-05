const { response } = require('express');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

const Resource = require('../models/Resource');
const User = require('../models/User');

const updateResource = async (req, res = response) => {
  try {
    const files = req.files || [];
    const { userId } = req.body;

    if (req?.files.length > 0) {
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
          files[0].originalname, { folder: userId, resource_type: 'video' })
        .then()
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

      const user = await User.findOneAndUpdate({ _id: userId }, {
        $push: {
          'content': url,
          'multimedia': resource._id
        }
      }, { new: true, useFindAndModify: true });

      if (user || url) {
        await user.save();
        await resource.save();
      }

      files.map((file) => {
        fs.unlinkSync(file.originalname);
      });


      return res.status(200).json({
        success: true,
        resource,
        userId,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        content: user.content,
        multimedia: user.multimedia,
      });

    } else {
      files.map((file) => {
        fs.unlinkSync(file.originalname);
      });
      return res.status(500).json({
        success: false,
        message: 'There aren\'t files'
      });
    }


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

const getResources = async (req, res = response) => {
  // const { limit = 5, from = 0 } = req.query;
  // const query = { status: true };
  try {
    const resources = await Resource.find();

    return res.status(200).json({
      success: true,
      resources
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

const getUserResources = async (req, res = response) => {
    // const { limit = 5, from = 0 } = req.query;
    // const query = { status: true };
    try {
      const { userId } = req.body;
      const resources = await Resource.find({
        'owner': userId
      }, (user) => {
        console.log(user);
      });
      if (resources) {
        return res.status(200).json({
          success: true,
          resources
        });
      } else {
        return res.status(400).json({
          success: false,
          message: 'There isn\'t resource with it owner'
        });
      }

    } catch (e) {
      console.log(e);
      return res.status(500).json({
        success: false,
        message: 'Contact with admin'
      });
    }
  }
;

module.exports = {
  updateResource,
  removeResource,
  getResources,
  getUserResources
};
