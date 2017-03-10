import React from 'react';


const Header = () => {

  return(
    <div id="header" className="container-fluid">
      <div className="sub-header row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
          <img src="../../style/img/logo.png" />
        </div>
      </div>
      <div className="sub-header row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
          Make your choices
        </div>
      </div>

    </div>
  );
}

export default Header;
