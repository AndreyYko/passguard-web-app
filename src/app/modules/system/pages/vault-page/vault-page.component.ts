import { Component, OnInit } from '@angular/core';

import { MIDDLE_CONTAINER_HEADERS_TITLES, PAGES, SIDES_CONTAINERS_HEADERS_TITLES } from '../../consts';

@Component({
  selector: 'app-vault-page',
  templateUrl: './vault-page.component.html',
  styleUrls: ['./vault-page.component.scss']
})
export class VaultPageComponent implements OnInit {
  public title: string = MIDDLE_CONTAINER_HEADERS_TITLES.STORAGE;
  public page: string = PAGES.STORAGE;
  public filtersTitle: string = SIDES_CONTAINERS_HEADERS_TITLES.FILTERS;
  public organizationsTitle: string = SIDES_CONTAINERS_HEADERS_TITLES.ORGANIZATIONS;
  
  constructor() { }

  ngOnInit() {
  }

}
