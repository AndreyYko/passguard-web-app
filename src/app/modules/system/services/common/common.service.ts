import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { COLORS } from '../../consts';

@Injectable()
export class CommonService {
  public getOrganizationShortTitle(title: string): string {
    return title.slice(0, 2).toUpperCase();
  }
  public getOrganizationPictureColor(): string {
    // Getting random color from colors array
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }
  public markAsTouchedFields(form: FormGroup): void {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
