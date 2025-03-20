import { User } from "../database/db.js";

// checkIfUserExist, createUser

export const checkIfUserExist = async (data) => {
  const user = await User.findOne({ where: { email: data.email } });
  return !!user;
};

export const getUserIfExists = async (data) => {
  const user = await User.scope("withPassword").findOne({
    where: { email: data.email },
  });
  return user;
};

export const getUserById = async (data) => {
  const user = await User.scope("withPassword").findOne({
    where: { _id: data },
  });
  return user;
};

export const getUserByToken = async (data) => {
  const user = await User.scope("withPassword").findOne({
    where: { resetToken: data.resetToken },
  });
  return user;
};

export const createUser = async (data) => {
  const newUser = await User.create(data);
  return newUser;
};

// Purpose: Contains service layer logic (e.g. database operations, API calls etc.)
// auth.service.js: Service for authentication logic.
// you can also add file uploads services if needed