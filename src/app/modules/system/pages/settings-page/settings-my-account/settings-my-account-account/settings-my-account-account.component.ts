import { Component, OnInit } from '@angular/core';

import { MIDDLE_CONTAINER_HEADERS_TITLES } from '../../../../consts';

@Component({
  selector: 'app-settings-my-account-account',
  templateUrl: './settings-my-account-account.component.html',
  styleUrls: ['./settings-my-account-account.component.scss']
})
export class SettingsMyAccountAccountComponent implements OnInit {
  public title: string = MIDDLE_CONTAINER_HEADERS_TITLES.MY_ACCOUNT;

  constructor() { }

  ngOnInit() {
  }

}
