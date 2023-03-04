import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

const blockEl = 'm-square__sub-modules__select';

const Select = ({ className, id, text, options, onChange, error, errorMessage }) => {
  const handleChange = ({ target: { value } }) => onChange(value);

  return (
    <div className={clsx(blockEl, className)}>
      <label htmlFor={id}>{text}</label>

      <div className={`${blockEl}__container`}>
        <select id={id} onChange={handleChange}>
          {options.map(({ name, value }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
        {error && <label className={`${blockEl}__error`}>{errorMessage}</label>}
      </div>
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Select.defaultProps = {
  className: '',
  id: '',
  text: '',
  options: [],
  onChange: () => {},
  error: false,
  errorMessage: '',
};

export default Select;
