import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// store
import { State } from '../../store/reducers';
import { CloseAddItemPopUp } from '../../store/actions/add-item-pop-up.actions';

@Component({
  selector: 'app-add-item-card-form',
  templateUrl: './add-item-card-form.component.html',
  styleUrls: ['./add-item-card-form.component.scss']
})
export class AddItemCardFormComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  closePopUp() {
    this.store.dispatch(new CloseAddItemPopUp());
  }
}
