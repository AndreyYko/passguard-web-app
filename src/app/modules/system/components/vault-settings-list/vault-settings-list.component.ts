import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../store/reducers';

@Component({
  selector: 'app-vault-settings-list',
  templateUrl: './vault-settings-list.component.html',
  styleUrls: ['./vault-settings-list.component.scss']
})
export class VaultSettingsListComponent implements OnInit {
  public isOpened$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.isOpened$ = this.store.pipe(select(state => state.vaultSettingsList.isOpened));
  }

  ngOnInit() {
  }

}
