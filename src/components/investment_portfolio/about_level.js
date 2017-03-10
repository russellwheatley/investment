import React from 'react';


const AboutLevel = (props) => {

  const { levelInformation } = props;


  return(
    <div className="row">
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
          <div className="about-level-wrapper panel panel-default">
            <h3>Level {levelInformation.number}</h3>
            <p>{levelInformation.text}</p>
          </div>
      </div>
    </div>
  );
}

export default AboutLevel;
