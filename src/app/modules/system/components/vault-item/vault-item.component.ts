import { Component, Input, OnInit } from '@angular/core';
// models
import { VaultItemShort } from '../../models/vault-item-short.model';
// constants
import { VAULT_ITEM_TYPES } from '../../consts';

@Component({
  selector: 'app-vault-item',
  templateUrl: './vault-item.component.html',
  styleUrls: ['./vault-item.component.scss']
})
export class VaultItemComponent implements OnInit {
  @Input() item: VaultItemShort;
  private itemTypes = VAULT_ITEM_TYPES;
  public isLogin = false;
  public isCard = false;
  public isNote = false;

  constructor() { }

  ngOnInit() {
    this.getItemType();
  }

  public getOwnerName(owner): string {
    if (owner === 0) {
      // TODO if owner = 0, set the user email
      return 'andrushagalushka@gmail.com';
    } else {
      // TODO if not 0, find organization with this ID and set
    }
  }

  private getItemType(): void {
    const { itemTypes } = this;
    switch (this.item.type) {
      case itemTypes.LOGIN:
        this.isLogin = true;
        break;
      case itemTypes.CARD:
        this.isCard = true;
        break;
      case itemTypes.NOTE:
        this.isNote = true;
        break;
      default:
        break;
    }
  }
}
