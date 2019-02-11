import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vault-organizations-list',
  templateUrl: './vault-organizations-list.component.html',
  styleUrls: ['./vault-organizations-list.component.scss']
})
export class VaultOrganizationsListComponent implements OnInit {
  @Input() isInDropDown = false;

  constructor() { }

  ngOnInit() {
  }

}
