import { Component, OnInit } from '@angular/core';

import { TITLE_PASSWORD_GENERATOR } from '../../../consts';

@Component({
  selector: 'app-tools-password-generator',
  templateUrl: './tools-password-generator.component.html',
  styleUrls: ['./tools-password-generator.component.scss']
})
export class ToolsPasswordGeneratorComponent implements OnInit {
  public title = TITLE_PASSWORD_GENERATOR;

  constructor() { }

  ngOnInit() {
  }

}
