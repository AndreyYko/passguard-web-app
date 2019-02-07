import { Component, OnInit } from '@angular/core';

import { TITLE_ORGANIZATIONS } from '../../../consts';

@Component({
  selector: 'app-settings-organizations',
  templateUrl: './settings-organizations.component.html',
  styleUrls: ['./settings-organizations.component.scss']
})
export class SettingsOrganizationsComponent implements OnInit {
  public title = TITLE_ORGANIZATIONS;

  constructor() { }

  ngOnInit() {
  }

}
