import { Component, Input, OnInit } from '@angular/core';

import { LeftSidebarLink } from '../../models/left-sidebar-link.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  @Input() isVaultPage = false;
  @Input() navigation: LeftSidebarLink[];

  constructor() { }

  ngOnInit() {
  }

}
