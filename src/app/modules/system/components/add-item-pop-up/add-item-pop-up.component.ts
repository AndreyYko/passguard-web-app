import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// animations
import { toggleAddItemPopUpStateTrigger } from '../../animations/toggle-add-item-pop-up.animation';
// store
import { State } from '../../store/reducers';
import { CloseAddItemPopUp } from '../../store/actions/add-item-pop-up.actions';
// constants
import { ADD_ITEM_POP_UP_SELECTORS } from '../../consts';

@Component({
  selector: 'app-add-item-pop-up',
  templateUrl: './add-item-pop-up.component.html',
  styleUrls: ['./add-item-pop-up.component.scss'],
  animations: [
    toggleAddItemPopUpStateTrigger
  ]
})
export class AddItemPopUpComponent implements OnInit {
  public selectors = ADD_ITEM_POP_UP_SELECTORS;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  closeAddItemPopUp(event) {
    if (event.target.id === this.selectors.WRAPPER_ID) {
      this.store.dispatch(new CloseAddItemPopUp());
    }
  }

  onCancelClick() {
    this.store.dispatch(new CloseAddItemPopUp());
  }
}
