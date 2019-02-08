import { Component, OnInit } from '@angular/core';

import { MIDDLE_CONTAINER_HEADERS_TITLES } from '../../../consts';

@Component({
  selector: 'app-settings-organizations',
  templateUrl: './settings-organizations.component.html',
  styleUrls: ['./settings-organizations.component.scss']
})
export class SettingsOrganizationsComponent implements OnInit {
  public title = MIDDLE_CONTAINER_HEADERS_TITLES.ORGANIZATIONS;

  constructor() { }

  ngOnInit() {
  }

}
