import { Component, OnInit } from '@angular/core';

import { TITLE_STORAGE } from '../../consts';

@Component({
  selector: 'app-vault-page',
  templateUrl: './vault-page.component.html',
  styleUrls: ['./vault-page.component.scss']
})
export class VaultPageComponent implements OnInit {
  public title = TITLE_STORAGE;
  
  constructor() { }

  ngOnInit() {
  }

}
