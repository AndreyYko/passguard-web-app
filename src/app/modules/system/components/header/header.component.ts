import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
// store
import { State } from '../../store/reducers';
import { ToggleMobileMenu } from '../../store/actions/mobile-menu.actions';
import { ToggleHeaderUserPopUp } from '../../store/actions/header-user-pop-up.actions';
// constants
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

  public toggleMobileMenu(): void {
    this.store.dispatch(new ToggleMobileMenu());
  }

  public toggleUserPopUp(): void {
    this.store.dispatch(new ToggleHeaderUserPopUp());
  }

  public isTitleFor(url): boolean {
    return this.router.url.includes(`/${url}`);
  }
}
