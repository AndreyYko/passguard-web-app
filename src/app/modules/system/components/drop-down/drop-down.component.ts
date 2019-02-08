import { Component, Input, OnInit } from '@angular/core';

import { PAGES } from '../../consts';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() page: string;
  public pages = PAGES;
  public isOpened = false;

  constructor() { }

  ngOnInit() {
  }

}
