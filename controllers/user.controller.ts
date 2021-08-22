import { response } from 'express';

export const createUser = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'Create user'
  });
};

export const getUsers = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'get user'
  });
};

export const updateUser = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'Update user'
  });
};

export const removeUser = async (req, res = response) => {
  await res.status(200).json({
    success: true,
    message: 'Remove user'
  });
};
