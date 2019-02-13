import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
// animations
import { toggleAddItemPopUpStateTrigger } from '../../animations/toggle-add-item-pop-up.animation';
// store
import { State } from '../../store/reducers';
import { CloseAddItemPopUp } from '../../store/actions/add-item-pop-up.actions';
// models
import { AddItemOption } from '../../models/add-item-option.model';
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
  public form: FormGroup;
  public options: AddItemOption[] = [
    {
      title: 'Login',
      value: 'login'
    },
    {
      title: 'Card',
      value: 'card'
    },
    {
      title: 'Secure Note',
      value: 'note'
    }
  ];

  constructor(private store: Store<State>) {
    this.form = new FormGroup({
      type: new FormControl(this.options[0].value)
    });
  }

  ngOnInit() {
  }

  closeAddItemPopUp(event) {
    if (event.target.id === this.selectors.WRAPPER_ID) {
      this.store.dispatch(new CloseAddItemPopUp());
    }
  }
}
