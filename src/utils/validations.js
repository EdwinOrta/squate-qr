export const isURLValid = (url) => {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
};

export const isEmptyField = (data) => data.length === 0;

export const existEmptyFields = (data) => Object.values(data).some((ele) => ele === true);

export const getInvalidData = (data) => {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const telephoneRegex = /^\d{10}$/;

  const objectValidated = {};
  for (const key in data) {
    if (key.includes('email')) {
      objectValidated[key] = isEmptyField(data[key]) || !emailRegex.test(data[key]);
    } else if (key.includes('telephone')) {
      objectValidated[key] = isEmptyField(data[key]) || !telephoneRegex.test(data[key]);
    } else {
      objectValidated[key] = isEmptyField(data[key]);
    }
  }

  return objectValidated;
};
