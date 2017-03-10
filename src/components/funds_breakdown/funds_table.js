import React from 'react';
import data from '../../../data';

const FundsTable = (props) => {

const { fundsProfile } = props;

//works out total percentage of stock investment
const totalPercent = fundsProfile.reduce((prev, current) => {
    return {percent: prev.percent + current.percent};
})

//works out total portfolio charge
const totalPortfolioCharge = fundsProfile.reduce((prev, current) => {
    return {charge: prev.charge + current.charge};
});

//works out average portfolio charge
const averagePortfolioCharge = totalPortfolioCharge.charge / fundsProfile.length;

const fundProfile = fundsProfile.map((elem, i) => {
  return(
    <tr key={elem.name + '-' + i}><td>{elem.name}</td><td>{elem.percent + '%'}</td><td>{elem.charge + '%'}</td></tr>
  )
})

  return(
    <div className="col-xs-8 col-sm-8 col-md-3 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-md-offset-0">
      <div className="funds-table-wrapper table-responsive">
        <table className="funds-table table">
          <thead>
            <tr>
              <td>Fund</td>
              <td>Proportion</td>
              <td>Charge</td>
            </tr>
          </thead>
          <tbody>
            {fundProfile}
          </tbody>
          <tfoot>
            <tr><td>Total</td><td>{totalPercent.percent}</td><td>{(averagePortfolioCharge).toFixed(2)}</td></tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default FundsTable;
