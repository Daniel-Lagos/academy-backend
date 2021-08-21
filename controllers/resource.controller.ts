import { response } from 'express';

const updateResource = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'Upload Resource'
  });
};

const getResource = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'get Resource'
  });
};


const removeResource = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'Remove Resource'
  });
};

export {
  getResource,
  updateResource,
  removeResource
};
