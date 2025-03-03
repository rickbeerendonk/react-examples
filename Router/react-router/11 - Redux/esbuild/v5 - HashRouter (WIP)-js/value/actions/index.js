/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import * as types from '../constants/ActionTypes';

export function change(value) {
  return {
    type: types.CHANGE,
    payload: value
  };
}
