import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

import { Input, Select, Button } from 'components';
import { NETWORK_TYPES } from 'constant';
import { getWifiEncoded, getInvalidData, existEmptyFields } from 'utils';

const blockEl = 'm-square__sub-modules__wifi-layout';

const Wifi = ({ className, generateQR }) => {
  const [data, setData] = useState({ type: 'WPA', name: '', password: '' });
  const [error, setError] = useState({ name: false, password: false });

  const handleChange = (id) => (value) => {
    setData({ ...data, [id]: value });
  };

  const handleGenerateQRCode = () => {
    const errorsFound = getInvalidData(data);
    if (!existEmptyFields(errorsFound)) {
      generateQR(getWifiEncoded(data));
    }
    setError(errorsFound);
  };

  return (
    <div className={clsx(blockEl, className)}>
      <Select
        className={`${blockEl}__select`}
        id="network-type"
        text="Network type: "
        options={NETWORK_TYPES}
        onChange={handleChange('type')}
      />
      <Input
        className={`${blockEl}__name`}
        id="name"
        text="Network name:"
        onChange={handleChange('name')}
        error={error.name}
        errorMessage="Empty field"
      />
      <Input
        className={`${blockEl}__password`}
        id="password"
        text="Password:"
        onChange={handleChange('password')}
        error={error.password}
        errorMessage="Empty field"
      />

      <Button className={`${blockEl}__button`} onClick={handleGenerateQRCode}>
        Generate QR
      </Button>
    </div>
  );
};

Wifi.propTypes = {
  className: PropTypes.string,
  generateQR: PropTypes.func,
};

Wifi.defaultProps = {
  className: '',
  generateQR: () => {},
};

export default Wifi;
