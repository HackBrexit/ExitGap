import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from '../../components/Button/index';

const List = [{name: "Funding and Finance", location: "FundingAndFinance"}, {name: "Policy and Regulation", location: "PolicyAndRegulation"}, {name: "Trade", location: "Trade"} ]


class Home extends Component {

  createLocation(name){
    return name;
  };

  renderButtons(){
    return List.map(item => {
        return (
          <li key={item.name}>
            <Button name={item.name} location={item.location} />
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
