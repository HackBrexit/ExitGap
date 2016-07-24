import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Button.scss';

export const Button = (props) => {
  return (
      <div>
        <Link to={"/" + props.location}>
          <div>{props.name}</div>
        </Link>
      </div>
  );
};

export default Button
