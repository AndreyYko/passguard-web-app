import { Component, Input, OnInit } from '@angular/core';

import { fadeStateTrigger } from '../../animations/fade.animation';

import { PAGES, SIDES_CONTAINERS_HEADERS_TITLES } from '../../consts';
import { LeftSidebarLink } from '../../models/left-sidebar-link.model';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  animations: [
    fadeStateTrigger
  ]
})
export class DropDownComponent implements OnInit {
  @Input() private page: string;
  @Input() public title: string;
  @Input() public navigation: LeftSidebarLink[];
  private pages = PAGES;
  private titles = SIDES_CONTAINERS_HEADERS_TITLES;

  public isOpened = false;

  public isFilters: boolean;
  public isOrganizations: boolean;
  public isTools: boolean;
  public isSettings: boolean;

  constructor() {}

  ngOnInit() {
    const { page, pages, title, titles } = this;
    this.isFilters = page === pages.STORAGE && title === titles.FILTERS;
    this.isOrganizations = page === pages.STORAGE && title === titles.ORGANIZATIONS;
    this.isTools = page === pages.TOOLS && title === titles.TOOLS;
    this.isSettings = page === pages.SETTINGS && title === titles.SETTINGS;
  }

  toggleDropDown() {
    this.isOpened = !this.isOpened;
  }
}
