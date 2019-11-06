/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { CHANGE } from '../constants/ActionTypes';

const initialState = 'React';

export default function name(state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return state;
  }
}
