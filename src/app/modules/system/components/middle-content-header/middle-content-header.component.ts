import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { fadeStateTrigger } from '../../animations/fade.animation';

import { MIDDLE_CONTAINER_HEADERS_TITLES } from '../../consts';
import { State } from '../../store/reducers';
import { ToggleVaultSettingsList } from '../../store/actions/vault-settings-list.actions';

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
  public isVaultSettingsListOpened$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.isVaultSettingsListOpened$ = this.store.pipe(select(state => state.vaultSettingsList.isOpened));
  }

  ngOnInit() {
  }

  public toggleVaultSettingsList() {
    this.store.dispatch(new ToggleVaultSettingsList());
  }
}
