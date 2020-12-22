import {
  AnimationTriggerMetadata,
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const messFade: AnimationTriggerMetadata = trigger('messFade', [
  state(
    'void',
    style({
      transform: 'scaleY(0)',
      opacity: 0,
      transformOrigin: 'left top',
    })
  ),
  state(
    'bottom',
    style({
      transform: 'scaleY(0.9999)',
      opacity: 1,
      transformOrigin: 'left top',
    })
  ),
  transition('void => bottom', [
    animate('200ms cubic-bezier(0.645, 0.045, 0.355, 1)'),
  ]),
  transition('bottom => void', [
    animate('200ms cubic-bezier(0.645, 0.045, 0.355, 1)'),
  ]),
]);
