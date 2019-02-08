import { Component, OnInit } from '@angular/core';

import { LeftSidebarLink } from '../../models/left-sidebar-link.model';

import { PAGES } from '../../consts';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrls: ['./tools-page.component.scss']
})
export class ToolsPageComponent implements OnInit {
  public navigation: LeftSidebarLink[] = [
    {
      title: 'Password Generator',
      url: 'password-generator'
    }
  ];
  public page: string = PAGES.TOOLS;

  constructor() { }

  ngOnInit() {
  }

}
