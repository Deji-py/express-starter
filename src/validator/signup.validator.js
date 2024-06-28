export const signupValidationSchema = {
  username: {
    notEmpty: true,
    errorMessage: " Username is required",
  },
  email: {
    notEmpty: true,
    isEmail: true,
    errorMessage: "  Email is either empty or invalid ",
  },
  password: {
    notEmpty: true,
    isLength: {
      errorMessage:
        " Password should not be empty or should be between 6 to 16 characters long",
      options: {
        min: 6,
        max: 16,
      },
    },
  },
};
