import { Action } from '@ngrx/store';
// models
import { VaultItemShort } from '../../models/vault-item-short.model';
import { VaultFilters } from '../../models/vault-filters.model';

export class VaultItems {
  items: VaultItemShort[] = [];
  filters: VaultFilters = {
    favorites: false,
    type: null,
    collection: null
  };
}

export enum ActionTypes {
  SET_FAVORITES_FILTER = 'SET_FAVORITES_FILTER',
  SET_TYPE_FILTER = 'SET_TYPE_FILTER',
  SET_COLLECTION_FILTER = 'SET_COLLECTION_FILTER',
}

export class SetFavoritesFilter implements Action {
  readonly type = ActionTypes.SET_FAVORITES_FILTER;
}

export class SetTypeFilter implements Action {
  readonly type = ActionTypes.SET_TYPE_FILTER;
  constructor(
    readonly payload: { type: string }
  ) {}
}

export class SetCollectionFilter implements Action {
  readonly type = ActionTypes.SET_COLLECTION_FILTER;
  constructor(
    readonly payload: { collection: string }
  ) {}
}

export type ActionUnion = SetFavoritesFilter | SetTypeFilter | SetCollectionFilter;
