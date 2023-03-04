import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

const blockEl = 'm-square__sub-modules__input';

const Input = ({ className, id, type, text, onChange, error, errorMessage }) => {
  const handleChange = ({ target: { value } }) => {
    onChange(value);
  };

  return (
    <div className={clsx(blockEl, className)}>
      {text && (
        <label htmlFor={id} className={`${blockEl}__label`}>
          {text}
        </label>
      )}
      <div className={`${blockEl}__container`}>
        <input type={type} name={id} id={id} onChange={handleChange} />
        {error && <label className={`${blockEl}__error`}>{errorMessage}</label>}
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  id: '',
  type: 'text',
  onChange: () => {},
  error: false,
  errorMessage: '',
};

export default Input;
