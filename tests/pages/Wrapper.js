import React, { Component } from 'react';

class Wrapper extends Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  static childContextTypes = {
    store: React.PropTypes.object
  }

  getChildContext() {
    return {
      store: {
        subscribe: () => {},
        getState: () => { return {}; }
      }
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
