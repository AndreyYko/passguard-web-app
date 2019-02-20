import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
// models
import { VaultFilters } from '../../models/vault-filters.model';
// store
import { State } from '../../store/reducers';
import { SetFavoritesFilter, SetTypeFilter } from '../../store/actions/vault-items.actions';
// constants
import { VAULT_ITEM_TYPES } from '../../consts';

@Component({
  selector: 'app-vault-filters',
  templateUrl: './vault-filters.component.html',
  styleUrls: ['./vault-filters.component.scss']
})
export class VaultFiltersComponent implements OnInit, OnDestroy {
  private filters$: Observable<VaultFilters>;
  private subscription: Subscription;
  public itemTypes = VAULT_ITEM_TYPES;
  public isAll = false;
  public isFavorites = false;
  public isLogin = false;
  public isCard = false;
  public isNote = false;

  constructor(private store: Store<State>) {
    this.filters$ = this.store.pipe(select(state => state.vaultItems.filters));
  }

  ngOnInit(): void {
    const { itemTypes: { LOGIN, CARD, NOTE } } = this;
    this.subscription = this.filters$.subscribe((value: VaultFilters) => {
      const { favorites, type, collection } = value;
      this.isAll = !favorites && !type && !collection;
      this.isFavorites = favorites;
      this.isLogin = type === LOGIN;
      this.isCard = type === CARD;
      this.isNote = type === NOTE;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setFavoritesFilter(): void {
    this.store.dispatch(new SetFavoritesFilter());
  }

  setTypeFilter(type: string): void {
    this.store.dispatch(new SetTypeFilter({ type }));
  }
}
