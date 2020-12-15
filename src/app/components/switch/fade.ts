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
      top: '-1px',
      left: '-1px',
      right: '-1px',
      bottom: '-1px',
    })
  ),
  state(
    'bottom',
    style({
      top: '-5px',
      left: '-5px',
      right: '-5px',
      bottom: '-5px',
    })
  ),
  transition('void => bottom', [animate('500ms cubic-bezier(.08,.82,.17,1)')]),
  transition('bottom => void', [animate('500ms cubic-bezier(.08,.82,.17,1)')]),
]);
