import { Component, OnInit } from '@angular/core';

import { TITLE_MY_ACCOUNT } from '../../../../consts';

@Component({
  selector: 'app-settings-my-account-account',
  templateUrl: './settings-my-account-account.component.html',
  styleUrls: ['./settings-my-account-account.component.scss']
})
export class SettingsMyAccountAccountComponent implements OnInit {
  public title = TITLE_MY_ACCOUNT;

  constructor() { }

  ngOnInit() {
  }

}
