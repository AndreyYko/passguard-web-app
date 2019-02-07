import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../store/reducers';
import { ToggleMobileMenu } from '../../store/actions/mobile-menu.actions';

import { headerLinkTitles } from '../../consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerLinkTitles = headerLinkTitles;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
  }

  public toggleMobileMenu() {
    this.store.dispatch(new ToggleMobileMenu());
  }
}
