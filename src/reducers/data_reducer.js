import {
LEVEL_INFORMATION,
FUNDS_PROFILE,
MONTHLY_AMOUNT,
LUMP_SUM
}from '../actions/types';

import data from '../../data';

const INITIAL_STATE = {
levelInformation:{number: 1, text: data.level_1.text},
fundsProfile:data.level_1.funds,
lumpSum: 0.00,
monthlyAmount: 0.00
}

export default function(state = INITIAL_STATE,action){
  switch(action.type){
  case LEVEL_INFORMATION:
    return {...state, levelInformation:action.payload }
  case FUNDS_PROFILE:
    return {...state, fundsProfile:action.payload }
  case MONTHLY_AMOUNT:
    return {...state, monthlyAmount:action.payload}
  case LUMP_SUM:
    return {...state, lumpSum:action.payload}
  }

  return state;
}
