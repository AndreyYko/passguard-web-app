import { Component, OnInit } from '@angular/core';

import { MIDDLE_CONTAINER_HEADERS_TITLES } from '../../../../consts';

@Component({
  selector: 'app-settings-my-account-danger',
  templateUrl: './settings-my-account-danger.component.html',
  styleUrls: ['./settings-my-account-danger.component.scss']
})
export class SettingsMyAccountDangerComponent implements OnInit {
  public title: string = MIDDLE_CONTAINER_HEADERS_TITLES.DANGER_ZONE;

  constructor() { }

  ngOnInit() {
  }

}
