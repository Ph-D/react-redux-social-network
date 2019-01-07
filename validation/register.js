const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Nom doit comporter entre 2 et 30 charactères";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Précisez nom";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Précisez email";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email invalide";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Précisez password";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password doit comporter entre 6 et 30 charactères";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirmez password";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password ne correspond pas";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
