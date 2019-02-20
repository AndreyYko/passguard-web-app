import { ActionReducer } from '@ngrx/store';
import update from 'immutability-helper';

import { ActionTypes, ActionUnion, VaultItems } from '../actions/vault-items.actions';

const initialState: VaultItems = new VaultItems();

export const vaultItemsReducer: ActionReducer<any> = (state: VaultItems = initialState, action: ActionUnion) => {
  switch (action.type) {
    case ActionTypes.SET_FAVORITES_FILTER:
      return update(state, {
        filters: {
          favorites: { $set: true },
          type: { $set: null },
          collection: { $set: null }
        }
      });
    case ActionTypes.SET_TYPE_FILTER:
      return update(state, {
        filters: {
          favorites: { $set: false },
          type: { $set: action.payload.type },
          collection: { $set: null }
        }
      });
    case ActionTypes.SET_COLLECTION_FILTER:
      return update(state, {
        filters: {
          favorites: { $set: false },
          type: { $set: null },
          collection: { $set: action.payload.collection }
        }
      });
    default:
      return state;
  }
};
