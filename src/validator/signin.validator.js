export const signinValidationSchema = {
  email: {
    notEmpty: true,
    isEmail: true,
    errorMessage: "  Email is either empty or invalid ",
  },
  password: {
    notEmpty: true,
    errorMessage: "  Password is required",
  },
};
