import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { State } from '../../store/reducers';

@Component({
  selector: 'app-header-user-pop-up',
  templateUrl: './header-user-pop-up.component.html',
  styleUrls: ['./header-user-pop-up.component.scss']
})
export class HeaderUserPopUpComponent implements OnInit {
  public isOpened: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.isOpened = this.store.pipe(select(state => state.headerUserPopUp.isOpened));
  }

  ngOnInit() {
  }

}
