import { matchedData, validationResult } from "express-validator";
import { User } from "../models/user.model.js";
import bscryptjs from "bcryptjs";

export const signin = async (req, res, next) => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    const sanitizedData = matchedData(req);
    const { email, password } = sanitizedData;
    try {
      const user = await User.findOne({ email });
      if (user && bscryptjs.compareSync(password, user.password)) {
        // use jwt to create Cookie

        return next({ statusCode: 200, message: "Login Successful" });
      } else {
        return next({ statusCode: 404, message: "Invalid login credentials" });
      }
    } catch (err) {
      return next({ statusCode: 500, message: err });
    }
  } else {
    return next({ statusCode: 400, message: error });
  }
};
