const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Votre post doit comporté entre 10 et 300 charactères";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Précisez champ texte";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
