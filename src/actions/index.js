import {
LEVEL_INFORMATION,
FUNDS_PROFILE,
MONTHLY_AMOUNT,
LUMP_SUM
} from './types';

import data from '../../data';

export function switchLevelInformation(number){
  switch(number){

    case 1:
    return[
     {type:LEVEL_INFORMATION, payload:{number:1, text:data.level_1.text}},
     {type:FUNDS_PROFILE, payload:data.level_1.funds}
   ]

    case 2:
    return [
      {type:LEVEL_INFORMATION, payload:{number:2, text:data.level_2.text}},
      {type:FUNDS_PROFILE, payload:data.level_2.funds}
    ]

    case 3:
    return [
      {type:LEVEL_INFORMATION, payload: {number:3, text:data.level_3.text}},
      {type:FUNDS_PROFILE, payload:data.level_3.funds}
    ]
  }
}

export function calculatorInputs(monthlyAmount, lumpSum){

  return [
    {type:MONTHLY_AMOUNT, payload:monthlyAmount},
    {type:LUMP_SUM, payload:lumpSum}
  ]


}
