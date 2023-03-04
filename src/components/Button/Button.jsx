import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

const blockEl = 'm-square__sub-modules__button';

const Button = ({ className, onClick, children }) => {
  return (
    <button className={clsx(blockEl, className)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  children: '',
};

export default Button;
