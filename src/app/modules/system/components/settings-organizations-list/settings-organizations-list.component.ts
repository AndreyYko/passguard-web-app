import { Component, OnInit } from '@angular/core';

import { Organization } from '../../models/organization.model';

@Component({
  selector: 'app-settings-organizations-list',
  templateUrl: './settings-organizations-list.component.html',
  styleUrls: ['./settings-organizations-list.component.scss']
})
export class SettingsOrganizationsListComponent implements OnInit {
  public organizations: Organization[] = [
    {
      id: 0,
      title: 'CHSBC'
    },
    {
      id: 1,
      title: 'CHNU'
    },
    {
      id: 2,
      title: 'KNUTD'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
