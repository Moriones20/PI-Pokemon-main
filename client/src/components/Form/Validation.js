const regexNameNumber = /\d/;
const regexUrl = /^(ftp|http|https):\/\/[^ "]+$/;

const Validation = (pokemon) => {
  let errors = {};

  if (pokemon.name && pokemon.name.length > 30) {
    errors.name = "Cannot be longer than 30 characters";
  }
  if (pokemon.name && regexNameNumber.test(pokemon.name)) {
    errors.name = "Cannot have numbers";
  }
  if (!regexUrl.test(pokemon.image)) {
    errors.image = "Must be a valid URL";
  }
  if (pokemon.hp > 999) {
    errors.hp = "Cannot exceed 999";
  }
  if (pokemon.attack > 999) {
    errors.attack = "Cannot exceed 999";
  }
  if (pokemon.defense > 999) {
    errors.defense = "Cannot exceed 999";
  }
  if (pokemon.speed > 999) {
    errors.speed = "Cannot exceed 999";
  }
  if (pokemon.types.length === 0) {
    errors.types = "You must select at least one type";
  }

  return errors;
};

export default Validation;
