import { response } from 'express';

export const updateResource = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'Upload Resource'
  });
};

export const getResource = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'get Resource'
  });
};


export const removeResource = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'Remove Resource'
  });
};
