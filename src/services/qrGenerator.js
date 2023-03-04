import { URL_QR_GENERATOR } from 'constant';

export const generateQR = (pathParameters) => {
  return fetch(URL_QR_GENERATOR + pathParameters)
    .then((response) => response.blob())
    .catch((err) => err);
};
