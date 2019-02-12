import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// animations
import { fadeStateTrigger } from '../../animations/fade.animation';
// store
import { State } from '../../store/reducers';
import { ToggleVaultSettingsList } from '../../store/actions/vault-settings-list.actions';
import { ToggleAddItemPopUp } from '../../store/actions/add-item-pop-up.actions';
// constants
import { MIDDLE_CONTAINER_HEADERS_TITLES, VAULT_SELECTORS } from '../../consts';

@Component({
  selector: 'app-middle-content-header',
  templateUrl: './middle-content-header.component.html',
  styleUrls: ['./middle-content-header.component.scss'],
  animations: [
    fadeStateTrigger
  ]
})
export class MiddleContentHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() isButtons = false;
  @Input() isDangerZone = false;
  public titles = MIDDLE_CONTAINER_HEADERS_TITLES;
  public vaultSelectors = VAULT_SELECTORS;
  public isVaultSettingsListOpened$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.isVaultSettingsListOpened$ = this.store.pipe(select(state => state.vaultSettingsList.isOpened));
  }

  ngOnInit() {
  }

  toggleVaultSettingsList() {
    this.store.dispatch(new ToggleVaultSettingsList());
  }

  toggleAddItemPopUp() {
    this.store.dispatch(new ToggleAddItemPopUp());
  }
}
