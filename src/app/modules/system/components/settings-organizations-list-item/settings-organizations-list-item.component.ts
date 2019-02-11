import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { CommonService } from '../../services/common/common.service';
import { State } from '../../store/reducers';
import { SetCurrentPopUpID } from '../../store/actions/settings-organizations-popups.actions';

import { Organization } from '../../models/organization.model';
import { SETTINGS_ORGANIZATIONS_SELECTORS } from '../../consts';


@Component({
  selector: 'app-settings-organizations-list-item',
  templateUrl: './settings-organizations-list-item.component.html',
  styleUrls: ['./settings-organizations-list-item.component.scss']
})
export class SettingsOrganizationsListItemComponent implements OnInit {
  @Input() public organization: Organization;
  public settingsOrganizationsSelectors = SETTINGS_ORGANIZATIONS_SELECTORS;
  public openedPopUpID$: Observable<string | null>;
  public shortTitle: string;
  public color: string;
  public selectorID: string;

  constructor(
    private commonService: CommonService,
    private store: Store<State>
  ) {
    this.openedPopUpID$ = this.store.pipe(select(state => state.settingsOrganizationsPopUps.currentPopUpID));
  }

  ngOnInit() {
    const { organization: { title, id }, commonService, settingsOrganizationsSelectors: { POP_UP_ID } } = this;
    this.shortTitle = commonService.getOrganizationShortTitle(title);
    this.color = commonService.getOrganizationPictureColor();
    this.selectorID = POP_UP_ID + id;
  }

  openPopUp(): void {
    this.store.dispatch(new SetCurrentPopUpID({ id: this.selectorID }));
  }
}
