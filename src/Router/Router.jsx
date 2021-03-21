import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { internalPaths } from 'navigation';

const Example = lazy(() => import('views/Example'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path={internalPaths.example} component={Example} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
