import Joi from "joi";
import { errorResponseHelper } from "../helpers/utilityHelpers.js";

const signupValidator = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().required(),
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    role: Joi.string(),
    status: Joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error && error.details) {
    return errorResponseHelper(res, {
      message: error.details[0].message,
    });
  } else {
    next();
  }
};

const signinValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error && error.details) {
    return errorResponseHelper(res, {
      message: error.details[0].message,
    });
  } else {
    next();
  }
};

export { signupValidator, signinValidator };

// Purpose: Contains validation logic for incoming requests.
// auth.validator.js: Validation for authentication-related requests (e.g., signin, signup or registration).
// you can use other validation libraries if needed