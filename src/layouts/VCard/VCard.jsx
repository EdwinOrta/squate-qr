import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

import { Input, Select, Button } from 'components';
import { TEL_TYPES } from 'constant';
import { getVCardEncoded, getInvalidData, existEmptyFields } from 'utils';

const blockEl = 'm-square__sub-modules__vcard-layout';

const VCard = ({ className, generateQR }) => {
  const [arrTelephones, setArrTelephones] = useState([]);
  const [arrEmails, setArrEmails] = useState([]);
  const [data, setData] = useState({ name: '', lastName: '', 'type-1': '', 'telephone-1': '', 'email-1': '' });
  const [error, setError] = useState({ name: false, lastName: false, 'email-1': false });

  useEffect(() => {
    setArrTelephones([1]);
    setArrEmails([1]);
  }, []);

  const handleChange = (id) => (value) => {
    setData({ ...data, [id]: value });
  };

  const handleAddTelephone = () => {
    const newIndex = arrTelephones.length + 1;
    setArrTelephones([...arrTelephones, newIndex]);
    setData({ ...data, ['telephone-' + newIndex]: '', ['type-' + newIndex]: '' });
  };

  const handleAddEmail = () => {
    const newIndex = arrEmails.length + 1;
    setArrEmails([...arrEmails, newIndex]);
    setData({ ...data, ['email-' + newIndex]: '' });
  };

  const handleGenerateQRCode = () => {
    const errorsFound = getInvalidData(data);
    if (!existEmptyFields(errorsFound)) {
      generateQR(getVCardEncoded(data));
    }
    setError(errorsFound);
  };

  return (
    <div className={clsx(blockEl, className)}>
      <div className={`${blockEl}__name-container`}>
        <Input id="name" text="Name" onChange={handleChange('name')} error={error.name} errorMessage="Invalid name" />
        <Input
          id="last-name"
          text="Last Name"
          onChange={handleChange('lastName')}
          error={error.lastName}
          errorMessage="Invalid last name"
        />
      </div>

      <div id="telephone-container" className={`${blockEl}__telephone-container`}>
        {arrTelephones.map((index) => (
          <div className={`${blockEl}__telephone`} key={`type-${index}`}>
            <Select
              className={`${blockEl}__select`}
              id="tel-type"
              text="Telephone: "
              options={TEL_TYPES}
              onChange={handleChange(`type-${index}`)}
              error={error['type-' + index]}
              errorMessage="Invalid value"
            />
            <Input
              id="telephone"
              onChange={handleChange(`telephone-${index}`)}
              error={error['telephone-' + index]}
              errorMessage="Invalid telephone number"
            />
          </div>
        ))}
      </div>

      <Button className={`${blockEl}__button`} onClick={handleAddTelephone}>
        Add other Telephone
      </Button>

      <div id="email-container" className={`${blockEl}__email-container`}>
        {arrEmails.map((index) => (
          <Input
            key={index}
            className={`${blockEl}__email`}
            id="email"
            text="Email:"
            onChange={handleChange(`email-${index}`)}
            error={error['email-' + index]}
            errorMessage="Invalid email"
          />
        ))}
      </div>

      <Button className={`${blockEl}__button`} onClick={handleAddEmail}>
        Add other Email
      </Button>

      <Button className={`${blockEl}__button-generate`} onClick={handleGenerateQRCode}>
        Generate QR
      </Button>
    </div>
  );
};

VCard.propTypes = {
  className: PropTypes.string,
  generateQR: PropTypes.func,
};

VCard.defaultProps = {
  className: '',
  generateQR: () => {},
};

export default VCard;
