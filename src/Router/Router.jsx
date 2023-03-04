import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { internalPaths } from 'navigation';

const Home = lazy(() => import('views/Home'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path={internalPaths.home} component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
