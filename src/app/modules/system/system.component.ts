import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
// store
import { State } from './store/reducers';
import { ToggleMobileMenu } from './store/actions/mobile-menu.actions';
// animations
import { toggleMobileMenuStateTrigger } from './animations/toggle-mobile-menu.animation';

@Component({
  selector: 'app-system',
  templateUrl: 'system.component.html',
  styleUrls: ['system.component.scss'],
  animations: [
    toggleMobileMenuStateTrigger
  ]
})
export class SystemComponent {
  public isMobileMenu$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.isMobileMenu$ = this.store.pipe(select(state => state.mobileMenu.isOpened));
  }

  public toggleMobileMenu() {
    this.store.dispatch(new ToggleMobileMenu());
  }
}
