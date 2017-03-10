import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class Investment extends Component {

render(){
  const { fundsProfile , levelInformation } = this.props;

  return(
    <div id="investment" className="container-fluid">
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
          <div className="investment-wrapper panel panel-default">
            <div className="row">
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                <span>Portfolio Name: Level {levelInformation.number}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                <span>Monthly Amount: {'£' + this.props.monthlyAmount}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                <span>Lump Sum: {'£' + this.props.lumpSum}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xs-offset-9 col-sm-offset-9 col-md-offset-9 col-lg-offset-9">
                <Link className="nav-button" to="/" >back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
}


function mapStateToProps(state){

  return{
    levelInformation:state.data.levelInformation,
    fundsProfile:state.data.fundsProfile,
    lumpSum:state.data.lumpSum,
    monthlyAmount:state.data.monthlyAmount
  }
}

export default connect(mapStateToProps)(Investment);
