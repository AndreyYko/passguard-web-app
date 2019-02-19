import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// store
import { State } from '../../store/reducers';
import { CloseAddItemPopUp } from '../../store/actions/add-item-pop-up.actions';
// services
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-add-item-login-form',
  templateUrl: './add-item-login-form.component.html',
  styleUrls: ['./add-item-login-form.component.scss']
})
export class AddItemLoginFormComponent implements OnInit {
  public form: FormGroup;
  public isVisiblePassword = false;

  constructor(
    private store: Store<State>,
    private commonService: CommonService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      owner: new FormControl(0),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
      notes: new FormControl('')
    });
  }

  get name() { return this.form.get('name'); }

  get username() { return this.form.get('username'); }

  get password() { return this.form.get('password'); }

  ngOnInit() {
  }

  togglePasswordType() {
    this.isVisiblePassword = !this.isVisiblePassword;
  }

  closePopUp() {
    this.store.dispatch(new CloseAddItemPopUp());
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.commonService.markAsTouchedFields(this.form);
    }
    console.log(this.form.value);
  }
}
