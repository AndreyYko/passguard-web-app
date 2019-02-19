import { Component, OnInit } from '@angular/core';
// models
import { VaultItemShort } from '../../models/vault-item-short.model';

@Component({
  selector: 'app-vault-items-list',
  templateUrl: './vault-items-list.component.html',
  styleUrls: ['./vault-items-list.component.scss']
})
export class VaultItemsListComponent implements OnInit {
  public items: VaultItemShort[] = [
    {
      id: 0,
      type: 'login',
      name: 'Google Account',
      owner: 0
    },
    {
      id: 1,
      type: 'login',
      name: 'Instagram',
      owner: 0
    },
    {
      id: 2,
      type: 'note',
      name: 'Secure note',
      owner: 0
    },
    {
      id: 3,
      type: 'card',
      name: 'Visa card',
      owner: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
