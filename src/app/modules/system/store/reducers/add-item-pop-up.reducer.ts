import { Action, ActionReducer } from '@ngrx/store';
import update from 'immutability-helper';

import { ActionTypes, AddItemPopUP } from '../actions/add-item-pop-up.actions';

const initialState: AddItemPopUP = new AddItemPopUP();

export const addItemPopUpReducer: ActionReducer<any> = (state: AddItemPopUP = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_ADD_ITEM_POP_UP:
      return update(state, {
        isOpened: { $set: !state.isOpened }
      });
    case ActionTypes.CLOSE_ADD_ITEM_POP_UP:
      return update(state, {
        isOpened: { $set: false }
      });
    default:
      return state;
  }
};
