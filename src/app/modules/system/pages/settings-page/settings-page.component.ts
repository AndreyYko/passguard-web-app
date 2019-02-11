import { Component, OnInit } from '@angular/core';

import { LeftSidebarLink } from '../../models/left-sidebar-link.model';

import { PAGES, SIDES_CONTAINERS_HEADERS_TITLES } from '../../consts';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  public navigation: LeftSidebarLink[] = [
    {
      title: 'My Account',
      url: 'my-account'
    },
    {
      title: 'Organizations',
      url: 'organizations'
    }
  ];
  public page: string = PAGES.SETTINGS;
  public settingsTitle: string = SIDES_CONTAINERS_HEADERS_TITLES.SETTINGS;

  constructor() { }

  ngOnInit() {
  }

}
