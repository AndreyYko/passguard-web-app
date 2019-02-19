import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// store
import { State } from '../../store/reducers';
import { CloseAddItemPopUp } from '../../store/actions/add-item-pop-up.actions';
// services
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-add-item-note-form',
  templateUrl: './add-item-note-form.component.html',
  styleUrls: ['./add-item-note-form.component.scss']
})
export class AddItemNoteFormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private store: Store<State>,
    private commonService: CommonService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      owner: new FormControl(0),
      notes: new FormControl('')
    });
  }

  get name() { return this.form.get('name'); }

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
