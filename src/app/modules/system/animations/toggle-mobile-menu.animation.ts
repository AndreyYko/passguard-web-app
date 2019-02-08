import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

export const toggleMobileMenuStateTrigger = trigger('toggleMobileMenu', [
  transition(':enter', [
    style({
      width: '0',
    }),
    animate(200, style({
      width: '250px',
    }))
  ]),
  transition(':leave', animate(200, style({
    width: '0'
  })))
]);
