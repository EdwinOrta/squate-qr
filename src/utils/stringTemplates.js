export const getURLEncoded = (url) => `?content=${encodeURIComponent(url)})`;

export const getWifiEncoded = ({ type, name, password }) =>
  `?content=${encodeURIComponent(`WIFI:T:${type};S:${name};P:${password};;`)}`;

export const getVCardEncoded = (data) => {
  let content = `BEGIN:VCARD\nVERSION:2.1\nN:${data.lastName};${data.name}\n`;

  for (const key in data) {
    if (key.includes('email')) {
      content = content + `EMAIL:${data[key]}\n`;
    } else if (key.includes('type')) {
      const numTelephone = key.substring(key.length - 1);
      content = content + `TEL;${data[key]}:${data['telephone-' + numTelephone]}\n`;
    }
  }
  content = content + 'END:VCARD';
  return `?content=${encodeURIComponent(content)}`;
};
