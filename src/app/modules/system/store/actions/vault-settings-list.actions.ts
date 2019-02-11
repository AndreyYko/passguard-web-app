import { Action } from '@ngrx/store';

export class VaultSettingsList {
  public isOpened = false;
}

export enum ActionTypes {
  TOGGLE_VAULT_SETTINGS_LIST = 'TOGGLE_VAULT_SETTINGS_LIST',
  CLOSE_VAULT_SETTINGS_LIST = 'CLOSE_VAULT_SETTINGS_LIST'
}

export class ToggleVaultSettingsList implements Action {
  readonly type = ActionTypes.TOGGLE_VAULT_SETTINGS_LIST;
}

export class CloseVaultSettingsList implements Action {
  readonly type = ActionTypes.CLOSE_VAULT_SETTINGS_LIST;
}
