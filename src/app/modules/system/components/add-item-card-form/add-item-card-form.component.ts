import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// store
import { State } from '../../store/reducers';
import { CloseAddItemPopUp } from '../../store/actions/add-item-pop-up.actions';
// services
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-add-item-card-form',
  templateUrl: './add-item-card-form.component.html',
  styleUrls: ['./add-item-card-form.component.scss']
})
export class AddItemCardFormComponent implements OnInit {
  public form: FormGroup;
  public brands = [
    { id: 0, title: 'Visa' },
    { id: 1, title: 'Mastercard' }
  ];

  constructor(
    private store: Store<State>,
    private commonService: CommonService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      owner: new FormControl(0),
      cardholder: new FormControl('', [Validators.required]),
      brand: new FormControl(this.brands[0].id),
      cardNumber: new FormControl('', [Validators.required]),
      expiryDate: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required, Validators.min(3)]),
      notes: new FormControl('')
    });
  }

  get name() { return this.form.get('name'); }

  get cardholder() { return this.form.get('cardholder'); }

  get cardNumber() { return this.form.get('cardNumber'); }

  get expiryDate() { return this.form.get('expiryDate'); }

  get cvv() { return this.form.get('cvv'); }

  ngOnInit() {
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
