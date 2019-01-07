const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "Précisez parcours scolaire";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Précisez diplôme";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Précisez domaine d'étude";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "Précisez date de début";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
