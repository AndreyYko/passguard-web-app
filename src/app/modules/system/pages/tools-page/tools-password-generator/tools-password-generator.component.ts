import { Component, OnInit } from '@angular/core';

import { MIDDLE_CONTAINER_HEADERS_TITLES } from '../../../consts';

@Component({
  selector: 'app-tools-password-generator',
  templateUrl: './tools-password-generator.component.html',
  styleUrls: ['./tools-password-generator.component.scss']
})
export class ToolsPasswordGeneratorComponent implements OnInit {
  public title: string = MIDDLE_CONTAINER_HEADERS_TITLES.PASSWORD_GENERATOR;

  constructor() { }

  ngOnInit() {
  }

}
