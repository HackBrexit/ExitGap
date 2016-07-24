
import React from 'react';
import { storiesOf } from '@kadira/storybook';

storiesOf('Colors', module)
  .add('Primary Color Palette', () => (
    <div>
      <h3>Primary colour palette</h3>
      <ul>
        <li style={{ color: 'red' }}>Red</li>
        <li style={{ color: 'blue' }}>Blue</li>
      </ul>
    </div>
  ));
