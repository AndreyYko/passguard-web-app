import { Action } from '@ngrx/store';

export class AddItemPopUP {
  public isOpened = false;
}

export enum ActionTypes {
  TOGGLE_ADD_ITEM_POP_UP = 'TOGGLE_ADD_ITEM_POP_UP',
  CLOSE_ADD_ITEM_POP_UP = 'CLOSE_ADD_ITEM_POP_UP'
}

export class ToggleAddItemPopUp implements Action {
  readonly type = ActionTypes.TOGGLE_ADD_ITEM_POP_UP;
}

export class CloseAddItemPopUp implements Action {
  readonly type = ActionTypes.CLOSE_ADD_ITEM_POP_UP;
}
