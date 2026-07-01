import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';

const generateToken = (id) => {
  return jwt.sign({ id }, config.jwtSecret, { expiresIn: config.jwtExpiresIn });
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return errorResponse(res, 'User already exists', 400);
    }
    const user = await User.create({ name, email, password });
    successResponse(res, {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    }, 'Registration successful', 201);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      successResponse(res, {
         _id: user._id,
         name: user.name,
         email: user.email,
         role: user.role,
         token: generateToken(user._id),
      }, 'Login successful');
    } else {
      errorResponse(res, 'Invalid email or password', 401);
    }
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const getMe = async (req, res) => {
  successResponse(res, req.user);
};

export const updateProfile = async (req, res) => {
  res.send('updateProfile not fully implemented yet');
};

export const changePassword = async (req, res) => {
  res.send('changePassword not fully implemented yet');
};
