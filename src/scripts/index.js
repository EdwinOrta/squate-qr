import { webpSupported } from './webpSupported';

function startScripts() {
  if (process.env.NODE_ENV === 'production') {
    // scripts that should only run in environments (dev, rc, production)
  }
  // scripts that can run in local
  webpSupported();
}

export { startScripts };
