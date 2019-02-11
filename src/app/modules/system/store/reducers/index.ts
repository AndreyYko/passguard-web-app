import { mobileMenuReducer } from './mobile-menu.reducer';
import { vaultSettingsListReducer } from './vault-settings-list.reducer';
import { settingsOrganizationsPopUpsReducer } from './settings-organizations-popups-reducer';
import { headerUserPopUpReducer } from './header-user-pop-up.reducer';

import { MobileMenu } from '../actions/mobile-menu.actions';
import { VaultSettingsList } from '../actions/vault-settings-list.actions';
import { SettingsOrganizationsPopUps } from '../actions/settings-organizations-popups.actions';
import { HeaderUserPopUp } from '../actions/header-user-pop-up.actions';

export class State {
  public mobileMenu: MobileMenu;
  public vaultSettingsList: VaultSettingsList;
  public settingsOrganizationsPopUps: SettingsOrganizationsPopUps;
  public headerUserPopUp: HeaderUserPopUp;
}

export const Reducers = {
  mobileMenu: mobileMenuReducer,
  vaultSettingsList: vaultSettingsListReducer,
  settingsOrganizationsPopUps: settingsOrganizationsPopUpsReducer,
  headerUserPopUp: headerUserPopUpReducer
};
