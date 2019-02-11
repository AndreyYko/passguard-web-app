import { Injectable } from '@angular/core';

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
}
