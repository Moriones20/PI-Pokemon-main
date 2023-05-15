const regexNameNumber = /\d/;
const regexUrl = /^(ftp|http|https):\/\/[^ "]+$/;

const Validation = (pokemon) => {
  let errors = {};

  if (pokemon.name.length > 30) {
    errors.name = "No puede tener mas de 30 caracteres";
  }
  if (regexNameNumber.test(pokemon.name)) {
    errors.name = "No puede tener numeros";
  }
  if (!regexUrl.test(pokemon.image)) {
    errors.image = "Tiene que ser una URL valida";
  }
  if (pokemon.hp > 999) {
    errors.hp = "No puede ser mayor a 999";
  }
  if (pokemon.attack > 999) {
    errors.attack = "No puede ser mayor a 999";
  }
  if (pokemon.defense > 999) {
    errors.defense = "No puede ser mayor a 999";
  }
  if (pokemon.speed > 999) {
    errors.speed = "No puede ser mayor a 999";
  }

  return errors;
};

export default Validation;
