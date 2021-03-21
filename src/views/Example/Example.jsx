import React from 'react';

import { Dependent } from 'components';

const blockEl = 'm-skeleton__example';

const Example = () => {
  return (
    <div className={blockEl}>
      <div className={`${blockEl}__container`}>background</div>
      <Dependent />
    </div>
  );
};

export default Example;
