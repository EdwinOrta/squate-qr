import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

const blockEl = 'm-square__sub-modules__title';

const Title = ({ className, children }) => {
  return <div className={clsx(blockEl, className)}>{children}</div>;
};

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

Title.defaultProps = {
  className: '',
  children: '',
};

export default Title;
