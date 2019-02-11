import { ActionReducer } from '@ngrx/store';
import update from 'immutability-helper';

import {
  ActionsUnion,
  ActionTypes,
  SettingsOrganizationsPopUps
} from '../actions/settings-organizations-popups.actions';

const initialState: SettingsOrganizationsPopUps = new SettingsOrganizationsPopUps();

export const settingsOrganizationsPopUpsReducer: ActionReducer<any> = (state: SettingsOrganizationsPopUps = initialState, action: ActionsUnion) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_POP_UP_ID:
      return update(state, {
        currentPopUpID: { $set: action.payload.id }
      });
    case ActionTypes.CLOSE_ALL_POP_UPS:
      return update(state, {
        currentPopUpID: { $set: null }
      });
    default:
      return state;
  }
};
