import { errorResponse } from '../utils/apiResponse.js';

export const validateRequest = (schema) => (req, res, next) => {
  // If using a library like Joi or Zod, execute it here.
  // We'll leave it as a generic wrapper for manual checks or future lib insertion
  try {
    if (schema) {
      schema.parse(req.body); // For Zod usage, just as an example
    }
    next();
  } catch (error) {
    return errorResponse(res, error.errors || error.message, 400);
  }
};
