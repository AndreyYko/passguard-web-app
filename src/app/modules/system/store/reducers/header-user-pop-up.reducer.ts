import { Action, ActionReducer } from '@ngrx/store';
import update from 'immutability-helper';

import { ActionTypes, HeaderUserPopUp } from '../actions/header-user-pop-up.actions';

const initialState: HeaderUserPopUp = new HeaderUserPopUp();

export const headerUserPopUpReducer: ActionReducer<any> = (state: HeaderUserPopUp = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_HEADER_USER_POP_UP:
      return update(state, {
        isOpened: { $set: !state.isOpened }
      });
    case ActionTypes.CLOSE_HEADER_USER_POP_UP:
      return update(state, {
        isOpened: { $set: false }
      });
    default:
      return state;
  }
};
