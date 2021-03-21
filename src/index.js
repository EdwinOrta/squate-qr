import React from 'react';
import ReactDOM from 'react-dom';

import { startScripts } from 'scripts';
import 'styles/_index.scss';
import App from './App';

startScripts();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
