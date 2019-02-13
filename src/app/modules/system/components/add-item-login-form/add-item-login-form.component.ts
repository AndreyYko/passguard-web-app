import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// store
import { State } from '../../store/reducers';
import { CloseAddItemPopUp } from '../../store/actions/add-item-pop-up.actions';

@Component({
  selector: 'app-add-item-login-form',
  templateUrl: './add-item-login-form.component.html',
  styleUrls: ['./add-item-login-form.component.scss']
})
export class AddItemLoginFormComponent implements OnInit {
  public form: FormGroup;
  public isVisiblePassword = false;

  constructor(private store: Store<State>) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      owner: new FormControl(0),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
      notes: new FormControl('')
    });
  }

  ngOnInit() {
  }

  togglePasswordType() {
    this.isVisiblePassword = !this.isVisiblePassword;
  }

  closePopUp() {
    this.store.dispatch(new CloseAddItemPopUp());
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
