export const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isStrongPassword = (password) => {
  // basic check
  return password.length >= 6;
};

export const isValidTrackingCode = (code) => {
  const re = /^LGK-\d{6}$/;
  return re.test(code);
};
