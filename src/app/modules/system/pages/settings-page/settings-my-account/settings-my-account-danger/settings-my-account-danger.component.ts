import { Component, OnInit } from '@angular/core';

import { TITLE_DANGER_ZONE } from '../../../../consts';

@Component({
  selector: 'app-settings-my-account-danger',
  templateUrl: './settings-my-account-danger.component.html',
  styleUrls: ['./settings-my-account-danger.component.scss']
})
export class SettingsMyAccountDangerComponent implements OnInit {
  public title = TITLE_DANGER_ZONE;

  constructor() { }

  ngOnInit() {
  }

}
