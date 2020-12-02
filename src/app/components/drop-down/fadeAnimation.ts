import {
  AnimationTriggerMetadata,
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const fadeInOut: AnimationTriggerMetadata = trigger('fadeInOut', [
  state(
    'void',
    style({
      transform: 'scaleY(0)',
      opacity: 0,
      transformOrigin: '50% 0% 0px',
      display: 'block',
    })
  ),
  state(
    'bottom',
    style({
      transform: 'scaleY(0.9999)',
      opacity: 1,
      transformOrigin: '50% 0% 0px',
      display: 'block',
    })
  ),
  transition('void => bottom', [
    animate('200ms cubic-bezier(.06,1.84,.68,.12)'),
  ]),
  transition('bottom => void', [
    animate('200ms cubic-bezier(0.755, 0.05, 0.855, 0.06)'),
  ]),
]);
