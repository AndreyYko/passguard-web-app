import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { State } from '../../store/reducers';
import { ToggleMobileMenu } from '../../store/actions/mobile-menu.actions';

import { PAGES } from '../../consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public pages = PAGES;

  constructor(
    private store: Store<State>,
    public router: Router
  ) {}

  ngOnInit() {
  }

  public toggleMobileMenu() {
    this.store.dispatch(new ToggleMobileMenu());
  }

  public isTitleFor(url): boolean {
    return this.router.url.includes(`/${url}`);
  }
}
