import { Component, OnInit } from '@angular/core';
// constants
import { MIDDLE_CONTAINER_HEADERS_TITLES } from '../../../consts';

@Component({
  selector: 'app-settings-create-organization',
  templateUrl: './settings-create-organization.component.html',
  styleUrls: ['./settings-create-organization.component.scss']
})
export class SettingsCreateOrganizationComponent implements OnInit {
  public title: string = MIDDLE_CONTAINER_HEADERS_TITLES.NEW_ORGANIZATION;

  constructor() { }

  ngOnInit() {
  }

}
