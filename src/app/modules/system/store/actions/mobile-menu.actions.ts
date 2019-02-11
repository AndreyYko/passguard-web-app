import { Action } from '@ngrx/store';

export class MobileMenu {
  public isOpened = false;
}

export enum ActionTypes {
  TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU'
}

export class ToggleMobileMenu implements Action {
  readonly type = ActionTypes.TOGGLE_MOBILE_MENU;
}
