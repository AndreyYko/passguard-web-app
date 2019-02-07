import * as mobileMenuReducer from './mobile-menu.reducer';

import { MobileMenu } from '../actions/mobile-menu.actions';

export class State {
  public mobileMenu: MobileMenu;
}

export const Reducers = {
  mobileMenu: mobileMenuReducer.mobileMenuReducer
};
