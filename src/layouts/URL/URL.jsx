import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

import { Input, Button } from 'components';
import { getURLEncoded, isURLValid } from 'utils';

const blockEl = 'm-square__sub-modules__url-layout';

const URL = ({ className, generateQR }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const handleChange = (value) => setData(value);

  const handleGenerateQRCode = () => {
    if (isURLValid(data)) {
      setError(false);
      generateQR(getURLEncoded(data));
    } else {
      setError(true);
    }
  };

  return (
    <div className={clsx(blockEl, className)}>
      <Input id="url" text="URL website:" onChange={handleChange} error={error} errorMessage="Invalid URL" />

      <Button className={`${blockEl}__button`} onClick={handleGenerateQRCode}>
        Generate QR
      </Button>
    </div>
  );
};

URL.propTypes = {
  className: PropTypes.string,
  generateQR: PropTypes.func,
};

URL.defaultProps = {
  className: '',
  gegenerateQRtData: () => {},
};

export default URL;
