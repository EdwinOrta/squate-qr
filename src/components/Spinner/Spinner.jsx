import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

const blockEl = 'm-square__sub-modules__spinner';

const Spinner = ({ className }) => {
  return <span className={clsx(blockEl, className)}></span>;
};

Spinner.propTypes = {
  className: PropTypes.string,
};

Spinner.defaultProps = {
  className: '',
};

export default Spinner;
