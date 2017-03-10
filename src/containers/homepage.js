import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import InvestmentPortfolio from '../components/investment_portfolio/investment_portfolio';
import FundsBreakdown from '../components/funds_breakdown/funds_breakdown';
import Charges from '../components/charges/charges';
import * as actions from '../actions';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <InvestmentPortfolio levelInformation={this.props.levelInformation}
                             switchLevelInformation={this.props.switchLevelInformation}
                             calculatorInputs={this.props.calculatorInputs}/>
        <FundsBreakdown fundsProfile={this.props.fundsProfile} />
        <Charges fundsProfile={this.props.fundsProfile} />
      </div>
    );
  }
}

function mapStateToProps(state){

  return{
    levelInformation:state.data.levelInformation,
    fundsProfile:state.data.fundsProfile
  }
}

export default connect(mapStateToProps, actions)(Homepage);
