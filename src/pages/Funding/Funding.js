import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchFundingData } from './FundingDuck.js';

class Funding extends Component {

  componentDidMount() {
      this.props.fetchFundingData();
    }

  render() {
    return (
      <div>
        <ul>
          test
        </ul>
      </div>
    );
  }
}



export default connect({ fetchFundingData });
