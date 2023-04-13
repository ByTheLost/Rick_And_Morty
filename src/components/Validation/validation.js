const validation = (userData) => {

  const errors = {};
  
  // Email validations
  if (!/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(userData.email)) {
    errors.email = 'Por favor, revisa tu email rey/reina';
  };

  if (!userData.email) {
    errors.email = 'Debe escribir un email';
  };

  if (userData.email.length > 35) {
    errors.email = 'El email no debe superar los 35 caracteres';
  };

  // Password validatios
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = 'Debe tener al menos un numero';
  }
  
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
  };

  return errors;
};

export default validation;