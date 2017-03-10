import React from 'react';


const ChooseLevel = (props) => {

const { switchLevelInformation, levelInformation } = props;

const switchLevel = (e) => {
  //regex for number
  const reg = /(\d+)/;
  //parses class for number
  const index = Number(reg.exec(e.target.className)[0]);
  //fires action to change data
  switchLevelInformation(index);
}

  return(
    <div className="row">
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
        <div className="choose-level-wrapper panel panel-default">
          <h3>Choose your risk portfolio</h3>
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="row">
                <div className="level-space col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className={"1 levels wrapper col-xs-9 col-sm-9 col-md-9 col-lg-9 " + ((levelInformation.number === 1) ? "highlight-level" : "") } onClick={switchLevel}>
                  <img src="../../../style/img/level_1_img.png" /><span>Level 1</span>
                </div>
                <div className="level-space col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="row">
                <div className="level-space col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className={"2 levels wrapper col-xs-9 col-sm-9 col-md-9 col-lg-9 " + ((levelInformation.number === 2) ? "highlight-level" : "")} onClick={switchLevel}>
                  <img src="../../../style/img/level_2_img.png" /><span>Level 2</span>
                </div>
                <div className="level-space col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="row">
                <div className="level-space col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className={"3 levels wrapper col-xs-9 col-sm-9 col-md-9 col-lg-9 " + ((levelInformation.number === 3) ? "highlight-level" : "")} onClick={switchLevel}>
                  <img src="../../../style/img/level_3_img.png" /><span>Level 3</span>
                </div>
                <div className="level-space col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseLevel;
