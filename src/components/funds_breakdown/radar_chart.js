import React from 'react';
import { Radar } from 'react-chartjs';

const RadarChart = (props) => {

const { fundsProfile } = props;

const dataValues = fundsProfile.map((elem) => {
 return elem.percent;
});

const dataLabels = fundsProfile.map((elem) => {
  return elem.symbol;
})

  const radarData = {
      labels: dataLabels,
      datasets: [
        {
       label: "Funds Breakdown",
       fillColor: "rgba(148,220,146,0.8)",
       strokeColor: "rgba(148,220,146,0.8)",
       pointColor: "rgba(151,187,205,1)",
       pointHighlightFill: "#71a86f",
       pointHighlightStroke: "#71a86f",
       data: dataValues
   }
      ]
};

const options = {
            angleLineColor : "#7a7daa",
            pointDotRadius : 2
    };


  return(
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xs-offset-2 col-sm-offset-2 col-md-offset-1 col-lg-offset-1">
      <div className="radar-chart-wrapper">
        <Radar data={radarData} options={options} redraw width="450px" height="225px"/>
      </div>
    </div>
  );
}

export default RadarChart;
