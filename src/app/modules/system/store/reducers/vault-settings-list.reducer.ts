import { Action, ActionReducer } from '@ngrx/store';
import update from 'immutability-helper';

import { ActionTypes, VaultSettingsList } from '../actions/vault-settings-list.actions';

const initialState: VaultSettingsList = new VaultSettingsList();

export const vaultSettingsListReducer: ActionReducer<any> = (state: VaultSettingsList = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_VAULT_SETTINGS_LIST:
      return update(state, {
        isOpened: { $set: !state.isOpened }
      });
    case ActionTypes.CLOSE_VAULT_SETTINGS_LIST:
      return update(state, {
        isOpened: { $set: false }
      });
    default:
      return state;
  }
};
