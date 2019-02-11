import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../store/reducers';

import { PAGES } from '../../consts';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  public isOpened$: Observable<boolean>;
  public pages = PAGES;

  constructor(private store: Store<State>) {
    this.isOpened$ = this.store.pipe(select(state => state.mobileMenu.isOpened));
  }

  ngOnInit() {
  }
}
