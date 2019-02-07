import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-content-header',
  templateUrl: './middle-content-header.component.html',
  styleUrls: ['./middle-content-header.component.scss']
})
export class MiddleContentHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() isButtons = false;
  @Input() isDangerZone = false;

  constructor() { }

  ngOnInit() {
  }

}
