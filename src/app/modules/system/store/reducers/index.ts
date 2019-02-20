import { mobileMenuReducer } from './mobile-menu.reducer';
import { vaultSettingsListReducer } from './vault-settings-list.reducer';
import { settingsOrganizationsPopUpsReducer } from './settings-organizations-popups-reducer';
import { headerUserPopUpReducer } from './header-user-pop-up.reducer';
import { addItemPopUpReducer } from './add-item-pop-up.reducer';
import { vaultItemsReducer } from './vault-items.reducer';

import { MobileMenu } from '../actions/mobile-menu.actions';
import { VaultSettingsList } from '../actions/vault-settings-list.actions';
import { SettingsOrganizationsPopUps } from '../actions/settings-organizations-popups.actions';
import { HeaderUserPopUp } from '../actions/header-user-pop-up.actions';
import { AddItemPopUP } from '../actions/add-item-pop-up.actions';
import { VaultItems } from '../actions/vault-items.actions';

export class State {
  public mobileMenu: MobileMenu;
  public vaultSettingsList: VaultSettingsList;
  public settingsOrganizationsPopUps: SettingsOrganizationsPopUps;
  public headerUserPopUp: HeaderUserPopUp;
  public addItemPopUp: AddItemPopUP;
  public vaultItems: VaultItems;
}

export const Reducers = {
  mobileMenu: mobileMenuReducer,
  vaultSettingsList: vaultSettingsListReducer,
  settingsOrganizationsPopUps: settingsOrganizationsPopUpsReducer,
  headerUserPopUp: headerUserPopUpReducer,
  addItemPopUp: addItemPopUpReducer,
  vaultItems: vaultItemsReducer
};
