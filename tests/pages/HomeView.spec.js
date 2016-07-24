
import React from 'react';
import HomeView from 'pages/Home/Home';
import { render } from 'enzyme';

describe('(View) Home', () => {
  let _component;

  beforeEach(() => {
    _component = render(<HomeView />);
  })

  it('Renders a paragraph', () => {
    const paragraph = _component.find('p');
    expect(paragraph).to.exist;
  })

})
