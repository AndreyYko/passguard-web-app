import { Action, ActionReducer } from '@ngrx/store';
import update from 'immutability-helper';

import { ActionTypes, MobileMenu } from '../actions/mobile-menu.actions';

const initialState: MobileMenu = new MobileMenu();

export const mobileMenuReducer: ActionReducer<any> = (state: MobileMenu = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MOBILE_MENU:
      return update(state, {
        isOpened: { $set: !state.isOpened }
      });
    default:
      return state;
  }
};
