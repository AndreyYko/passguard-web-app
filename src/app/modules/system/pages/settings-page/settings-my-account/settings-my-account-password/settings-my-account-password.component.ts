import { Component, OnInit } from '@angular/core';

import { TITLE_CHANGE_MASTER_PASSWORD } from '../../../../consts';

@Component({
  selector: 'app-settings-my-account-password',
  templateUrl: './settings-my-account-password.component.html',
  styleUrls: ['./settings-my-account-password.component.scss']
})
export class SettingsMyAccountPasswordComponent implements OnInit {
  public title = TITLE_CHANGE_MASTER_PASSWORD;

  constructor() { }

  ngOnInit() {
  }

}
