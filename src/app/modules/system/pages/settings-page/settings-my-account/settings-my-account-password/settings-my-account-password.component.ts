import { Component, OnInit } from '@angular/core';

import { MIDDLE_CONTAINER_HEADERS_TITLES } from '../../../../consts';

@Component({
  selector: 'app-settings-my-account-password',
  templateUrl: './settings-my-account-password.component.html',
  styleUrls: ['./settings-my-account-password.component.scss']
})
export class SettingsMyAccountPasswordComponent implements OnInit {
  public title: string = MIDDLE_CONTAINER_HEADERS_TITLES.CHANGE_MASTER_PASSWORD;

  constructor() { }

  ngOnInit() {
  }

}
