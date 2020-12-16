import {
  AnimationTriggerMetadata,
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const switchFade: AnimationTriggerMetadata = trigger('switchFade', [
  state(
    'void',
    style({
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      borderWidth: '0px',
    })
  ),
  state(
    'bottom',
    style({
      top: '-4px',
      left: '-4px',
      right: '-4px',
      bottom: '-4px',
      borderWidth: '4px',
    })
  ),
  transition('void => bottom', [animate('200ms cubic-bezier(.08,.82,.17,1)')]),
  transition('bottom => void', [animate('200ms cubic-bezier(.08,.82,.17,1)')]),
]);
