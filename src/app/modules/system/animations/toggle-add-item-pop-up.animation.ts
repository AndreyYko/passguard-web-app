import {
  trigger,
  style,
  animate,
  transition,
  query, animateChild
} from '@angular/animations';

import { ADD_ITEM_POP_UP_SELECTORS } from '../consts';

export const toggleAddItemPopUpStateTrigger = trigger('toggleAddItemPopUp', [
  transition(':enter', [
    query(`#${ADD_ITEM_POP_UP_SELECTORS.FORM_WRAPPER_ID}`, [
      style({
        opacity: '0',
        transform: 'translateY(-25%)'
      }),
      animate(200, style({
        opacity: '1',
        transform: 'none'
      })),
      animateChild()
    ])
  ])
]);
