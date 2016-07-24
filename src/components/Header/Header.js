import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Header.scss';

export const Header = () => (
  <div className="col-xs-12">
    <h1>Exit Gap</h1>
    <IndexLink to="/" activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to="/login" activeClassName={classes.activeRoute}>
      Test
    </Link>
    {' · '}
    <Link to="/summary" activeClassName={classes.activeRoute}>
      xxx
    </Link>
  </div>
);

export default Header;
