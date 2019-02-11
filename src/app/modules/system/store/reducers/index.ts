import { mobileMenuReducer } from './mobile-menu.reducer';
import { vaultSettingsListReducer} from './vault-settings-list.reducer';

import { MobileMenu } from '../actions/mobile-menu.actions';
import { VaultSettingsList } from '../actions/vault-settings-list.actions';

export class State {
  public mobileMenu: MobileMenu;
  public vaultSettingsList: VaultSettingsList;
}

export const Reducers = {
  mobileMenu: mobileMenuReducer,
  vaultSettingsList: vaultSettingsListReducer
};
