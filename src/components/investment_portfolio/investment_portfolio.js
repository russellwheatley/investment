import React from 'react';
import InvestmentCalculator from './investment_calculator';
import ChooseLevel from './choose_level';
import AboutLevel from './about_level';

const InvestmentPortfolio = (props) => {

  const {switchLevelInformation, levelInformation, calculatorInputs} = props;

  return(
    <div id="investment-portfolio" className="container-fluid">
      <InvestmentCalculator calculatorInputs={calculatorInputs} />
      <ChooseLevel switchLevelInformation={switchLevelInformation}
                   levelInformation={levelInformation}
                />
      <AboutLevel
                   levelInformation={levelInformation}
                />

    </div>
  )
}

export default InvestmentPortfolio;
