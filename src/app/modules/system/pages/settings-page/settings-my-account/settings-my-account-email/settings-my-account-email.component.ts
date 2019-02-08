import { Component, OnInit } from '@angular/core';

import { MIDDLE_CONTAINER_HEADERS_TITLES } from '../../../../consts';

@Component({
  selector: 'app-settings-my-account-email',
  templateUrl: './settings-my-account-email.component.html',
  styleUrls: ['./settings-my-account-email.component.scss']
})
export class SettingsMyAccountEmailComponent implements OnInit {
  public title: string = MIDDLE_CONTAINER_HEADERS_TITLES.CHANGE_EMAIL;

  constructor() { }

  ngOnInit() {
  }

}
