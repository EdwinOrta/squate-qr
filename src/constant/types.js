export const QR_TYPES = [
  {
    name: 'Standard URL',
    value: 'standard',
    desc: 'This QR helps you to scan the code and takes you to a website.',
  },
  {
    name: 'Wifi Login',
    value: 'wifi-login',
    desc:
      'This QR embeds the details for joining a WiFi network. Scanning the code allows the user to join the network. This is a convenient way to share your WiFi network with visitors.',
  },
  {
    name: 'VCard',
    value: 'vCard',
    desc:
      'This QR embeds a business card into the code, which can be added to your contacts when scanned. The vCard standard is extensive.',
  },
];

export const NETWORK_TYPES = [
  {
    name: 'WPA',
    value: 'WPA',
  },
  {
    name: 'WEP',
    value: 'WEP',
  },
];

export const TEL_TYPES = [
  {
    name: '',
    value: '',
  },
  {
    name: 'WORK',
    value: 'WORK',
  },
  {
    name: 'HOME',
    value: 'HOME',
  },
];
