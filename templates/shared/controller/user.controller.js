// controller/auth.controller.js
import bcrypt from "bcryptjs";
import { GLOBAL_MESSAGES } from "../config/global-config.js";
import { checkIfUserExist, createUser } from "../services/auth.service.js";
import { serverErrorHelper, successResponseHelper} from "../helpers/utilityHelper.js";

// signup
export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const existingUser = await checkIfUserExist({ email });
    if (existingUser) {
      return errorResponseHelper(res, {
        message: GLOBAL_MESSAGES.USER_EXISTS,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const data = {
      fullName,
      email,
      password: hashedPassword,
    };
    const newUser = await createUser(data);
    newUser.password = null;
    return successResponseHelper(res, { user: newUser });
  } catch (error) {
    return serverErrorHelper(res, error);
  }
};

// welcome controller
export const welcome = async (req, res) => {
  try {
    successResponseHelper(res, {
      message: GLOBAL_MESSAGES.welcomStatus,
    });
  } catch (error) {
    return serverErrorHelper(res, error);
  }
};
