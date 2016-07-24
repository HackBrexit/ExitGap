import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from '../layouts/CoreLayout';
import Home from '../pages/Home';
import Funding from '../pages/Funding';


export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="funding" component={Funding} />

  </Route>
);
