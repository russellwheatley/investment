import React from 'react';
import FundsTable from './funds_table';
import RadarChart from './radar_chart';

const FundsBreakdown = (props) => {

const { fundsProfile } = props;

  return(
    <div id="funds-breakdown" className="container-fluid">
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
          <h3 className="funds-breakdown-header">Fund Breakdowns</h3>
        </div>
      </div>
      <div className="row">
        <RadarChart fundsProfile={fundsProfile} />
        <div className="clearfix visible-xs-block visible-sm-block"></div>
        <FundsTable fundsProfile={fundsProfile}/>
      </div>
      </div>
  );
}

export default FundsBreakdown;
