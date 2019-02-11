import { Action } from '@ngrx/store';

export class HeaderUserPopUp {
  public isOpened = false;
}

export enum ActionTypes {
  TOGGLE_HEADER_USER_POP_UP = 'TOGGLE_HEADER_USER_POP_UP',
  CLOSE_HEADER_USER_POP_UP = 'CLOSE_HEADER_USER_POP_UP'
}

export class ToggleHeaderUserPopUp implements Action {
  readonly type = ActionTypes.TOGGLE_HEADER_USER_POP_UP;
}

export class CloseHeaderUserPopUp implements Action {
  readonly type = ActionTypes.CLOSE_HEADER_USER_POP_UP;
}
