import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../store/reducers';
import { ToggleMobileMenu } from '../../store/actions/mobile-menu.actions';

@Component({
  selector: 'app-mobile-menu-link',
  templateUrl: './mobile-menu-link.component.html',
  styleUrls: ['./mobile-menu-link.component.scss']
})
export class MobileMenuLinkComponent implements OnInit {
  @Input() navigateTo: string;
  @Input() title: string;

  constructor(private store: Store<State>) {}

  ngOnInit() {
  }

  public toggleMobileMenu() {
    this.store.dispatch(new ToggleMobileMenu());
  }
}
