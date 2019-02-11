import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

export const fadeStateTrigger = trigger('fade', [
  transition(':enter', [
    style({
      opacity: '0',
    }),
    animate(350, style({
      opacity: '1',
    }))
  ]),
  transition(':leave', animate(100, style({
    opacity: '0'
  })))
]);
