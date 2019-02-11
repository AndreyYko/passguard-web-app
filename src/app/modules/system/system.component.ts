import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
// store
import { State } from './store/reducers';
import { ToggleMobileMenu } from './store/actions/mobile-menu.actions';
import { CloseVaultSettingsList } from './store/actions/vault-settings-list.actions';
import { ClearAllPopUps } from './store/actions/settings-organizations-popups.actions';
// animations
import { toggleMobileMenuStateTrigger } from './animations/toggle-mobile-menu.animation';
// constants
import { SETTINGS_ORGANIZATIONS_SELECTORS, VAULT_SELECTORS } from './consts';

@Component({
  selector: 'app-system',
  templateUrl: 'system.component.html',
  styleUrls: ['system.component.scss'],
  animations: [
    toggleMobileMenuStateTrigger
  ]
})
export class SystemComponent {
  private vaultSelectors = VAULT_SELECTORS;
  private settingsOrganizationsSelectors = SETTINGS_ORGANIZATIONS_SELECTORS;
  public isMobileMenu$: Observable<boolean>;
  public isVaultSettingsList$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.isMobileMenu$ = this.store.pipe(select(state => state.mobileMenu.isOpened));
    this.isVaultSettingsList$ = this.store.pipe(select(state => state.vaultSettingsList.isOpened));
  }
  // Listener for closing all pop-ups
  // TODO Close header user pop-up on click!
  @HostListener('click', ['$event.target.classList.value'])
  onClick(classList) {
    const clickedOnSettingsOrganizationsOpenPopUpButton = classList.includes(this.settingsOrganizationsSelectors.OPEN_POP_UP_BUTTON_CLASS);
    const clickedOnVaultOpenSettingsPopUpButton = classList.includes(this.vaultSelectors.OPEN_SETTINGS_POP_UP_BUTTON_CLASS);
    if (!clickedOnSettingsOrganizationsOpenPopUpButton) {
      this.store.dispatch(new ClearAllPopUps());
    }
    if (!clickedOnVaultOpenSettingsPopUpButton) {
      this.store.dispatch(new CloseVaultSettingsList());
    }
  }

  public toggleMobileMenu() {
    this.store.dispatch(new ToggleMobileMenu());
  }
}
