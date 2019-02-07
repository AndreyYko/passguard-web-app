import { Component, OnInit } from '@angular/core';

import { TITLE_CHANGE_EMAIL } from '../../../../consts';

@Component({
  selector: 'app-settings-my-account-email',
  templateUrl: './settings-my-account-email.component.html',
  styleUrls: ['./settings-my-account-email.component.scss']
})
export class SettingsMyAccountEmailComponent implements OnInit {
  public title = TITLE_CHANGE_EMAIL;

  constructor() { }

  ngOnInit() {
  }

}
