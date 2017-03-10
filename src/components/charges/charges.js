import React from 'react';


const Charges = (props) => {

const { fundsProfile } = props;

//value parsed from example
const totalInvestment = 1354.54;
//standard evestor charge
const evestorAnnualSeviceCharge = 0.35;

//works out total portfolio charge
const totalPortfolioCharge = fundsProfile.reduce((prev, current) => {
    return {charge: prev.charge + current.charge};
});

//works out average portfolio charge
const averagePortfolioCharge = totalPortfolioCharge.charge / fundsProfile.length;

const portfolioAnnualCost = () => {
  //works out charge from total investment
  return ((totalInvestment / 100) * averagePortfolioCharge).toFixed(2);
}

const evestorAnnualSeviceCost = () => {
  return ((totalInvestment / 100) * evestorAnnualSeviceCharge).toFixed(2);
}

const totalAnnualServiceCharge = () => {
  return (averagePortfolioCharge + evestorAnnualSeviceCharge).toFixed(2);
}

const totalAnnualCost = () => {
  //changed string values to number & wrapped in parentheses to evalute first
  const totalCost = ((+portfolioAnnualCost()) + (+evestorAnnualSeviceCost())).toFixed(2);

  return totalCost;
}


  return(
    <div id="charges" className="container-fluid">
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
          <h3 className="charges-header">Charges</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
          <div className="charges-table-wrapper table-responsive">
            <table className="charges-table table">
              <thead>
                <tr>
                  <td>Transaction Detail</td>
                  <td>Charge</td>
                  <td>Portfolio Amount</td>
                </tr>
              </thead>
              <tbody>
                <tr><td>Initial Cost</td><td>0%</td><td>£0</td></tr>
                <tr><td>Portfolio Annual Cost</td><td>{(averagePortfolioCharge).toFixed(2) + '%'}</td><td>{'£' + portfolioAnnualCost()}</td></tr>
                <tr><td>Evestor Annual Service Cost</td><td>{(evestorAnnualSeviceCharge).toFixed(2) + '%'}</td><td>{'£' + evestorAnnualSeviceCost()}</td></tr>
                <tr><td>Total Annual Cost</td><td>{totalAnnualServiceCharge() + '%'}</td><td>{'£' + totalAnnualCost()}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charges;
