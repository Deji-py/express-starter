import { matchedData, validationResult } from "express-validator";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = (req, res, next) => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    const sanitizedData = matchedData(req);
    const { username, email, password } = sanitizedData;
    const encrytedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      username,
      email,
      password: encrytedPassword,
    });
    newUser
      .save()
      .then(() => {
        return next({
          statusCode: 200,
          message: "Signup Successful",
        });
      })
      .catch((err) => {
        return next({
          statusCode: 400,
          message: err,
        });
      });
  } else {
    return next({ statusCode: 400, message: error });
  }
};
