import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../store/reducers';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  isOpened$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.isOpened$ = this.store.pipe(select(state => state.mobileMenu.isOpened));
  }

  ngOnInit() {
  }

}
