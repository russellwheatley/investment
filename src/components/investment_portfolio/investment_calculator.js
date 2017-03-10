import React from 'react';
import { Link } from 'react-router';


const InvestmentCalculator = (props) => {

const { calculatorInputs } = props;

  const grabValues =  () => {
    //grab value
    const monthlyAmount = document.querySelector('.form-control.monthly-amount').value;
    const lumpSum = document.querySelector('.form-control.lump-sum').value;
    //make sure it is a number
    console.log('umpsum :', lumpSum);
    const sendLumpSum  = Number(lumpSum) ? lumpSum : 0.00;
    const sendMonthlyAmount = Number(monthlyAmount) ? monthlyAmount : 0.00;
    //send to reducer
    calculatorInputs(sendMonthlyAmount, sendLumpSum);
  }

  return(
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
          <div className="investment-calculator-wrapper panel panel-default">
            <h3>About your investment</h3>
            <div className="row">
              <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                <label>Monthly Amount (£)</label>
                <input type="text" className="form-control monthly-amount" aria-label="Checkbox for following text input" />
              </div>
              <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <label>Lump Sum (£)</label>
                <input type="text" className="form-control lump-sum" aria-label="Text input with checkbox"/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xs-offset-2 col-sm-offset-2 col-md-offset-0 col-lg-offset-0">
          <Link className="nav-button" to="/investment" onClick={grabValues} >continue</Link>
        </div>
      </div>
  );
}

export default InvestmentCalculator;
