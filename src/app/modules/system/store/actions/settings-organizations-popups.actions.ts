import { Action } from '@ngrx/store';

export class SettingsOrganizationsPopUps {
  public currentPopUpID: string | null = null;
}

export enum ActionTypes {
  SET_CURRENT_POP_UP_ID = 'SET_CURRENT_POP_UP_ID',
  CLOSE_ALL_POP_UPS = 'CLOSE_ALL_POP_UPS'
}

export class SetCurrentPopUpID implements Action {
  readonly type = ActionTypes.SET_CURRENT_POP_UP_ID;
  constructor(
    readonly payload: { id: string }
  ) {}
}

export class ClearAllPopUps implements Action {
  readonly type = ActionTypes.CLOSE_ALL_POP_UPS;
}

export type ActionsUnion = SetCurrentPopUpID | ClearAllPopUps;
