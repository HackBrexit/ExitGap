import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from '../../components/Button/index';

const List = [{name: "Funding and Finance"}, {name: "Policy and Regulation"}, {name: "Trade"} ]

class Home extends Component {

  renderButtons(){
    return List.map(item => {
      return (
        <li key={item.name}>
          <Button name={item.name} />
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.renderButtons()}
        </ul>
      </div>
    );
  }
}



export default Home;
