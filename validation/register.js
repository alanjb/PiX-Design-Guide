const Validator = require('validator');
import isEmpty from './is-empty';

//can access this function from outside
module.exports = function validatorRegisterInput(data) {
  let errors = {};

  if(!Validator.isLength(data.name, {min: 2, max:30})){
    errors.name = "Name must be between 2 and 30 characters";
  }
  return{
    errors,
    isValid: isValid(errors)
  }
}